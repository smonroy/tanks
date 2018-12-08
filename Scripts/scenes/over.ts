module scenes {
    export class Over extends objects.Scene {

        private _gameOver: objects.Label;
        private _result: objects.Label;
        private _background: objects.Background;
        private _mainMenu: objects.Button;

        constructor() {
            super();

            this.Start();
        }

        public Start(): void {
            this._background = new objects.Background();
            this._background.SetMove(true);
            this._gameOver = new objects.Label("Game over", "60px", "Consolas", "#FFFF00", config.SCREEN_WITH / 2, config.SCREEN_HEIGHT / 2 - 120, true);
            this._gameOver.shadow = new createjs.Shadow("black", 5, 5, 5);
            let result:string;
            let color:string;
            if(managers.Game.scoreBoard._P1Victories >= 3) {
                result = "Orange";
                color = "#DB961E";
            } else {
                result = "Green";
                color = "#11A83F";
            }
            this._result = new objects.Label(result + " player won", "40px", "Consolas", color, config.SCREEN_WITH / 2, config.SCREEN_HEIGHT / 2, true);
            this._mainMenu = new objects.Button("menuButton", config.SCREEN_WITH / 2, (config.SCREEN_HEIGHT / 2) + 120, true);
            this.Main();
        };

        public Update(): void {
            this._background.Update();
        };

        public Destroy(): void {
            this.removeAllChildren();
        };

        public Reset(): void {

        };

        public Main(): void {
            this.addChild(this._background);
            this.addChild(this._gameOver);
            this.addChild(this._result);
            this.addChild(this._mainMenu);

            this._mainMenu.on("click", () => {
                managers.Game.currentState = config.Scene.START;
            });
        };
    }
}