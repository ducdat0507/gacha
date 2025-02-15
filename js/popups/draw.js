popups.draw = {
    state: {},
    elms: {},
    call(loot) {
        let i18n = str.popups.draw;
        let popup = makePopup();
        popup.classList.add("clear", "draw-popup");
        popup.onpointerdown = () => {
            if (this.state.phase == "breaking") {
                this.state.timer -= effects.breakSkip;
            } else if (this.state.phase == "revealing") {
                this.state.timer = effects.revealTime * (1 - effects.revealSkip);
            }
        }

        this.state = {
            loot,
            phase: "breaking",
            timer: effects.breakTime,
            index: 0,
        };
        this.elms = {};

        let bigCard = this.elms.bigCard = $make("div.big-card");
        bigCard.innerHTML = `
            <div class="out-flex">
                <span class="number">DTCGco.™</span>
                <div class="flex-fill"></div>
                <small style="text-align: end;">
                    ${
                        loot.cards[0]?.[1] == "ex" ? "SPECIAL EXTRA<br/>LIMITED EDITION" :
                        loot.res.length ? "BONUS ITEMS<br>INCLUDED" :
                            "FIRST<br>EDITION"
                    }
                </small>
            </div>
            <div class="in-flex flex-fill">
                <div class="number" style="font-size:4em">Ω</div>
                <h1 class="number">${i18n.strings.pack_title()}</h1>
                <div>${i18n.strings.pack_subtitle()}</div>
            </div>
            <small class="out-flex" style="align-items: end">
                <span>
                    ${i18n.strings.pack_count(format(loot.cards.reduce((x, y) => x + y[3], 0)))}
                </span>
                <div class="flex-fill"></div>
                <small style="text-align: end; font-size: 0.5em">
                    ${i18n.strings.brand_full()} 
                </small>
            </small>
        `
        popup.$body.append(bigCard);

        let list = this.elms.list = $make("div.card-list");
        popup.$body.append(list);

        let result = this.elms.result = $make("div.draw-result");
        popup.$body.append(result);

        let resultCur = $make("div.draw-result-currencies");
        for (let res of loot.res) {
            let div = createCurrencyUI(res[0]);
            div.$amount.textContent = format(res[1]);
            resultCur.append(div);
        }
        result.append(resultCur);


        let close = $make("button.primary.thick", str.popups.common.action_continue());
        close.onclick = () => {
            if (game.stats.cardsDrawn >= MAX_CARDS) {
                awardBadge(31);
                callPopup("prompt", str.popups.complete.strings.title(), [
                    verbify(str.popups.complete.strings.line1()),
                    $make("br"),
                    $makeHTML("span", str.popups.complete.strings.line2(_number(format.time(game.stats.timePlayed, 4)))),
                    $make("hr"),
                    str.popups.complete.strings.line3(),
                ]);
            }
            popup.close();
        }
        result.append(close);
        

        addEvent("frame", this.onFrame);
        return popup;
    },
    onFrame() {
        let state = popups.draw.state;
        let localElms = popups.draw.elms;

        state.timer -= delta / 1000;
        if (state.phase == "breaking") {
            if (state.timer <= 0) {
                localElms.bigCard.classList.add("broken");
                state.phase = "revealing";
                state.timer = effects.revealTime;
            }
            if (effects.breakTime - state.timer > .1) localElms.bigCard.style.setProperty("--timer", 1 - state.timer / effects.breakTime);
            
            let anim = str.verbs[game.option.verb]?._anim?.();
            if (anim == "spin") {
                localElms.bigCard.style.setProperty("--rotate", Math.floor((1 - state.timer / effects.breakTime) ** 5 * 3600) + "deg");
                localElms.bigCard.style.setProperty("--shake", "0px, 0px");
            } else {
                localElms.bigCard.style.setProperty("--rotate", Math.random() * 4 - 2 + "deg");
                localElms.bigCard.style.setProperty("--shake", (Math.random() * 10 - 5) + "px, " + (Math.random() * 20 - 10) + "px");
            }
        } else if (state.phase == "revealing") {
            while (state.timer <= 0) {
                if (state.index >= state.loot.cards.length) {
                    state.phase = "done";
                    popups.draw.onDone();
                    localElms.list.classList.add("done");
                    if (localElms.list.scrollHeight > localElms.list.clientHeight) localElms.list.style.setProperty("--padding", localElms.result.scrollHeight + "px");
                    localElms.result.style.setProperty("--height", localElms.list.scrollHeight + localElms.result.scrollHeight * 2 + "px");
                    removeEvent("frame", popups.draw.onFrame);
                    break;
                } else {
                    let [pack, rarity, id, count, isNew, isShredded] = state.loot.cards[state.index];
                    let card = createCardUI(pack, rarity, id);
                    registerTooltip(card, tooltipTemplates.card(pack, rarity, id));
                    card.classList.add("anim-draw-in");

                    let badgeItems = [
                        isNew ? "NEW" : null,
                        isShredded ? "♻" : null,
                        count > 1 ? "×" + format(count) : null,
                    ].filter(e =>e !== null);
                    
                    if (badgeItems.length > 0) {
                        let holder = $make("div.draw-amount.number", ...badgeItems);
                        card.append(holder);
                    }
                    localElms.list.append(card);
                    localElms.list.scrollTo({ top: localElms.list.scrollHeight, behavior: 'smooth' });
                    state.index++;
                    state.timer += effects.revealTime;
                }
            }
        }
    },
    onDone() {
        let loot = popups.draw.state.loot;
        for (let res of loot.res) {
            game.res[res[0]] += res[1];
        }
        for (let card of loot.cards) {
            game.stats.cardsDrawn += card[3];
            addCard(...card);
            if (card[1] == "r") awardBadge(12);
            if (card[1] == "sr") awardBadge(13);
            if (card[1] == "ssr") awardBadge(14);
            if (card[1] == "ur") awardBadge(15);
        }

        game.time.drawCooldown = 1;
        if (game.drawPref.skills.water) game.time.drawCooldown *= effects.skillWaterWait;
        game.drawPref.skills = {};
        updateEffects();
        updateUnlocks();
        emit("card-update");
        saveGame();
    },
    onClose() {
        this.state = {};
        this.elms = {};
        removeEvent("frame", this.onFrame);
    }
}