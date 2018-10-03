module scenes {
    export class Start extends objects.Scene{

        private _welcomeLabel:objects.Label;
        private _background:objects.Background;
        private _startButton:objects.Button;

        constructor() {
            super();

            this.Start();
        }

        public Start():void {
            this._background = new objects.Background();
            this._background.SetMove(true);
            this._welcomeLabel = new objects.Label("Tortuga no Sensō", "60px", "Consolas", "#FFFF00", config.SCREEN_WITH/2, config.SCREEN_HEIGHT/2, true);
            this._startButton = new objects.Button("startButton", config.SCREEN_WITH/2, (config.SCREEN_HEIGHT/2) + 120, true);
            this.Main();
        };

        public Update():void {
            this._background.Update();
        };

        public Destroy():void {
            this.removeAllChildren();
        };

        public Reset():void {

        };

        public Main():void {
            this.addChild(this._background);
    
            this.addChild(this._welcomeLabel);
    
            this.addChild(this._startButton);

            this._startButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.PLAY;
            });
        };
    }
}