var scenes;
(function (scenes) {
    class Over extends objects.Scene {
        constructor() {
            super();
            this.Start();
        }
        Start() {
            this._background = new objects.Background();
            this._background.SetMove(true);
            this._gameOver = new objects.Label("Game over", "60px", "Consolas", "#FFFF00", config.SCREEN_WITH / 2, config.SCREEN_HEIGHT / 2 - 120, true);
            this._gameOver.shadow = new createjs.Shadow("black", 5, 5, 5);
            let result;
            let color;
            if (managers.Game.scoreBoard._P1Victories >= 3) {
                result = "Orange";
                color = "#DB961E";
            }
            else {
                result = "Green";
                color = "#11A83F";
            }
            this._result = new objects.Label(result + " player won", "40px", "Consolas", color, config.SCREEN_WITH / 2, config.SCREEN_HEIGHT / 2, true);
            this._mainMenu = new objects.Button("menuButton", config.SCREEN_WITH / 2, (config.SCREEN_HEIGHT / 2) + 120, true);
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
            this.addChild(this._gameOver);
            this.addChild(this._result);
            this.addChild(this._mainMenu);
            this._mainMenu.on("click", () => {
                managers.Game.currentState = config.Scene.START;
            });
        }
        ;
    }
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map