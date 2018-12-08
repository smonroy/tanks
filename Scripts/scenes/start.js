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
            this._welcomeLabel = new objects.Label("Tortuga no Sensō", "60px", "Consolas", "#FFFF00", config.SCREEN_WITH / 2, config.SCREEN_HEIGHT / 2 - 120, true);
            this._welcomeLabel.shadow = new createjs.Shadow("black", 5, 5, 5);
            this._startButton = new objects.Button("startButton", config.SCREEN_WITH / 2, (config.SCREEN_HEIGHT / 2), true);
            this._howToBtn = new objects.Button("howToButton", config.SCREEN_WITH / 2, (config.SCREEN_HEIGHT / 2) + 120, true);
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
            this.addChild(this._howToBtn);
            this._startButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY;
            });
            this._howToBtn.on("click", () => {
                managers.Game.currentState = config.Scene.INSTRUCTIONS;
            });
        }
        ;
    }
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map