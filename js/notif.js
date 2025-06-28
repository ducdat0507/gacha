let notifs = [];

function spawnNotif(...content) {
    let div = $make("div.notif", ...content);
    elms.notifs.append(div);
    div.time = 5000;
    div.onclick = () => {
        div.classList.add("clicked");
        closeNotif(div);
    }
    notifs.push(div);
    return div;
}

function closeNotif(notif) {
    let a;
    if (typeof notif == "number") {
        a = notif;
        notif = notifs[a];
    } else {
        a = notifs.indexOf(notif);
    }
    notif.classList.add("disappearing");
    setTimeout(() => notif.remove(), 1000);
    notifs.splice(a, 1);
}

function updateNotifs() {
    for (let a = 0; a < notifs.length; a++) {
        let notif = notifs[a];
        notif.time -= delta;
        if (notif.time <= 0) {
            closeNotif(a);
            a--;
        }
    } 
}


function spawnBadgeNotif(badge) {
    let data = badges[badge];
    let img;

    let div = spawnNotif(
        $make("picture.image", 
            img = $make("img")
        ),
        $make("div.info", 
            $make("div", str.notifs.badge_earn()),
            $make("h3", verbify(str.badges[badge].name()))
        ),
        $make("div.overlay")
    )

    div.classList.add("badge-notif");
    if (data.noImage) {
        img.src = "res/badges/placeholder.png";
    } else {
        img.src = `res/badges/${badge}.png`;
        img.onerror = () => {
            img.src = "res/badges/placeholder.png";
            data.noImage = true;
            img.onerror = undefined;
        };
    }
}


function createNotificationListener() {
    let fireWasDone = true;
    let energyWasCapped = true;
    
    return () => {
        let fireDone = game.time.skillCooldowns.fire == 0;
        let energyCapped = game.res.energy > effects.energyCap;

    requestAnimationFrame(loop);
        if (fireDone && !fireWasDone){
            new Notification("Burst has recharged!").onclick = () => window.focus()
        }
        if (energyCapped && !energyWasCapped) {
            new Notification("Energy has filled!").onclick = () => window.focus()
        }
        
        fireWasDone = fireDone;
        energyWasCapped = energyCapped;
    }
}

addEvent("frame", createNotificationListener());