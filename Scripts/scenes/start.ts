module scenes {
    export class Start extends objects.Scene {

        private _welcomeLabel: objects.Label;
        private _background: objects.Background;
        private _startButton: objects.Button;
        private _howToBtn: objects.Button;

        constructor() {
            super();

            this.Start();
        }

        public Start(): void {
            this._background = new objects.Background();
            this._background.SetMove(true);
            this._welcomeLabel = new objects.Label("Tortuga no Sensō", "60px", "Consolas", "#FFFF00", config.SCREEN_WITH / 2, config.SCREEN_HEIGHT / 2 - 120, true);
            this._welcomeLabel.shadow = new createjs.Shadow("black", 5, 5, 5);
            this._startButton = new objects.Button("startButton", config.SCREEN_WITH / 2, (config.SCREEN_HEIGHT / 2), true);
            this._howToBtn = new objects.Button("howToButton", config.SCREEN_WITH / 2, (config.SCREEN_HEIGHT / 2) + 120, true);
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
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._howToBtn);

            this._startButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY;
            });

            this._howToBtn.on("click", () => {
                managers.Game.currentState = config.Scene.INSTRUCTIONS;
            });
        };
    }
}