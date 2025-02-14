let elms = {}

document.addEventListener("DOMContentLoaded", () => {
    initCloud();
    loadGame();
    initUI();
    updateEffects();
    updateUnlocks();
    updateMusic();
    setTab("collection");
    time = performance.now();
    setEveryFrameOrInterval(loop, 10000);
    setTimeout(() => checkCloudSave(), 1000);
    
    $("#loading").remove();
    awardShow(1);
});

let time = 0;
let delta = 0;

function loop() {
    delta = performance.now() - time;
    time += delta;
    game.time.now = Date.now();

    onFrame();
    updateNotifs();
}

async function setEveryFrameOrInterval(handler, timeout) {
    var safeHandler = async (t) => handler(t);
    while (true) {
        let t = await new Promise(r => { requestAnimationFrame(r); setTimeout(() => r(performance.now()), timeout) });
        safeHandler(t);
    }
}
