// IIFE - Immediately Invoked Function Expression
(function(){
    // game variables
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;
    let assetManager:createjs.LoadQueue;

    let currentScene:objects.Scene;
    let currentState:config.Scene;
    let scoreBoard:managers.ScoreBoard;

    let assetManifest = [
        {id:"startButton", src:"./Assets/Images/startButton.png"},
        {id:"engineSound", src:"./Assets/audio/engine.ogg"},
        {id:"thunderSound", src:"./Assets/audio/thunder.ogg"},
        {id:"yaySound", src:"./Assets/audio/yay.ogg"},
        {id:"background1", src:"./Assets/Images/background1.jpg"},
        {id:"background2", src:"./Assets/Images/background2.jpg"},
        {id:"background3", src:"./Assets/Images/background3.jpg"},
        {id:"tank1", src:"./Assets/Images/tank1.png"},
        {id:"tank2", src:"./Assets/Images/tank2.png"},
        {id:"turret1", src:"./Assets/Images/turret1.png"},
        {id:"turret2", src:"./Assets/Images/turret2.png"},
        {id:"bullet1", src:"./Assets/Images/bullet1.png"},
        {id:"bullet2", src:"./Assets/Images/bullet2.png"},
        {id:"block_in", src:"./Assets/Images/block_in.png"},
        {id:"block_b1", src:"./Assets/Images/block_b1.png"},
        {id:"block_b2", src:"./Assets/Images/block_b2.png"},
        {id:"block_d1", src:"./Assets/Images/block_d1.png"},
        {id:"block_d2", src:"./Assets/Images/block_d2.png"},
        {id:"block_d2_2", src:"./Assets/Images/block_d2_2.png"},
        {id:"speedUp", src:"./Assets/Images/block_sp.png"},
        {id:"fireRateUp", src:"./Assets/Images/block_rp.png"},
    ];

    function Init():void {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetMnager = assetManager;
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start);

    }

    function Start():void {
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
        })
        document.addEventListener("keyup", (event) => {
            managers.Input.HandleUpInput(event);
        })
        
        scoreBoard = new managers.ScoreBoard();
        managers.Game.scoreBoard = scoreBoard;

        Main();
    }

    // this is the game loop
    function Update():void {
        managers.Input.ControllerInput();
        currentScene.Update();

        if(currentState != managers.Game.currentState) {
            currentState = managers.Game.currentState;
            Main();
        }

        stage.update();
    }

    function Main():void {

        if(currentScene) {
            currentScene.Destroy();
            stage.removeAllChildren();
        }

        switch(currentState) {
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