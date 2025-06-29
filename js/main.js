let elms = {}

document.addEventListener("DOMContentLoaded", () => {
    initCloud();
    loadGame();
    initUI();
    updateEffects();
    updateUnlocks();
    updateMusic();
    handleOfflineProgress();
    setTab("collection");
    time = performance.now();
    requestAnimationFrame(loop);
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

    if (game.option.updateRate) setTimeout(loop, 1000 / game.option.updateRate);
    else requestAnimationFrame(loop);
}