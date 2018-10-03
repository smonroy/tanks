var scenes;
(function (scenes) {
    class Start extends objects.Scene {
        constructor() {
            super();
            this.Start();
        }
        Start() {
            this._background = new objects.Background();
            this._background.SetMove(true);
            this._welcomeLabel = new objects.Label("Tortuga no Sensō", "60px", "Consolas", "#FFFF00", config.SCREEN_WITH / 2, config.SCREEN_HEIGHT / 2, true);
            this._startButton = new objects.Button("startButton", config.SCREEN_WITH / 2, (config.SCREEN_HEIGHT / 2) + 120, true);
            this.Main();
        }
        ;
        Update() {
            this._background.Update();
        }
        ;
        Destroy() {
            this.removeAllChildren();
        }
        ;
        Reset() {
        }
        ;
        Main() {
            this.addChild(this._background);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this._startButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY;
            });
        }
        ;
    }
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map