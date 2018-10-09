// IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    let canvas;
    let stage;
    let assetManager;
    let currentScene;
    let currentState;
    let assetManifest = [
        { id: "startButton", src: "./Assets/Images/startButton.png" },
        { id: "engineSound", src: "./Assets/audio/engine.ogg" },
        { id: "thunderSound", src: "./Assets/audio/thunder.ogg" },
        { id: "yaySound", src: "./Assets/audio/yay.ogg" },
        { id: "background1", src: "./Assets/Images/background1.jpg" },
        { id: "background2", src: "./Assets/Images/background2.jpg" },
        { id: "background3", src: "./Assets/Images/background3.jpg" },
        { id: "tank", src: "./Assets/Images/tank.png" },
        { id: "block_in", src: "./Assets/Images/block_in.png" },
        { id: "block_b1", src: "./Assets/Images/block_b1.png" },
        { id: "block_b2", src: "./Assets/Images/block_b2.png" },
        { id: "block_d1", src: "./Assets/Images/block_d1.png" },
        { id: "block_d2", src: "./Assets/Images/block_d2.png" },
        { id: "block_d2_2", src: "./Assets/Images/block_d2_2.png" },
    ];
    function Init() {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetMnager = assetManager;
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start);
    }
    function Start() {
        console.log(`%c Game Started`, "color:blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage;
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);
        currentState = config.Scene.START;
        managers.Game.currentState = currentState;
        document.addEventListener("keydown", (event) => {
            managers.Input.HandleInput(event);
        });
        document.addEventListener("keyup", (event) => {
            managers.Input.HandleUpInput(event);
        });
        Main();
    }
    // this is the game loop
    function Update() {
        currentScene.Update();
        if (currentState != managers.Game.currentState) {
            currentState = managers.Game.currentState;
            Main();
        }
        stage.update();
    }
    function Main() {
        if (currentScene) {
            currentScene.Destroy();
            stage.removeAllChildren();
        }
        switch (currentState) {
            case config.Scene.START:
                currentScene = new scenes.Start();
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.Play();
                break;
        }
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map