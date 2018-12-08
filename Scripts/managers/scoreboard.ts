module managers {
    export class ScoreBoard {
        // private _score:number;
        // private _lives:number;
        // private _highScore:number;

        private _p1Bases:number;
        private _p2Bases:number;
        private _p1Victories:number;
        private _p2Victories:number;

        private _p1BasesLabel:objects.Label;
        private _p2BasesLabel:objects.Label;
        private _p1VictoriesLabel:objects.Label;
        private _p2VictoriesLabel:objects.Label;
    
        // private _scoreLabel:objects.Label;
        // private _livesLabel:objects.Label;
        // private _highScoreLabel:objects.Label;        

        get _P1Bases():number {
            return this._p1Bases;
        }

        set _P1Bases(newValue:number) {
            this._p1Bases = newValue;
            this._p1BasesLabel.text = "Bases: " + this._p1Bases;
        }

        get _P2Bases():number {
            return this._p2Bases;
        }

        set _P2Bases(newValue:number) {
            this._p2Bases = newValue;
            this._p2BasesLabel.text = "Bases: " + this._p2Bases;
        }

        get _P1Victories():number {
            return this._p1Victories;
        }

        set _P1Victories(newValue:number) {
            this._p1Victories = newValue;
            this._p1VictoriesLabel.text = "Wins: " + this._p1Victories;
        }

        get _P2Victories():number {
            return this._p2Victories;
        }

        set _P2Victories(newValue:number) {
            this._p2Victories = newValue;
            this._p2VictoriesLabel.text = "Wins: " + this._p2Victories;
        }

        // contructor
        constructor(p1Bases:number = 0, p2bases:number = 0, p1Victories:number = 0, p2Victories:number = 0) {
            this.Start();
            this._P1Bases = p1Bases;
            this._P2Bases = p2bases;
            this._P1Victories = p1Victories;
            this._P2Victories = p2Victories;
            
        }

        // private methods

        // public methods
        public Start():void {
            this._p1BasesLabel = new objects.Label("Bases: 9", "30px", "Consolas", "#FFFF00", 20, 5, false);
            this._p1BasesLabel.shadow = new createjs.Shadow("black", 3, 3, 1);
            this._p1VictoriesLabel = new objects.Label("Wins: 9", "30px", "Consolas", "#00FF00", 170, 5, false);
            this._p1VictoriesLabel.shadow = new createjs.Shadow("black", 3, 3, 1);
            this._p2BasesLabel = new objects.Label("Bases: 9", "30px", "Consolas", "#FFFF00", 740, 5, false);
            this._p2BasesLabel.shadow = new createjs.Shadow("black", 3, 3, 1);
            this._p2VictoriesLabel = new objects.Label("Wins: 9", "30px", "Consolas", "#00FF00", 890, 5, false);
            this._p2VictoriesLabel.shadow = new createjs.Shadow("black", 3, 3, 1);
        }

        public AddPlayUI(currentScene:objects.Scene):void {
            currentScene.addChild(this._p1BasesLabel);
            currentScene.addChild(this._p1VictoriesLabel);
            currentScene.addChild(this._p2BasesLabel);
            currentScene.addChild(this._p2VictoriesLabel);
        }

        public Reset(p1Bases:number = 0, p2bases:number = 0):void {
            this._p1Bases = p1Bases;
            this._p2Bases = p2bases;
        }

        public AddGameOverUI(currentScene:objects.Scene):void {
            currentScene.addChild(this._p1VictoriesLabel);
            currentScene.addChild(this._p2VictoriesLabel);
        }

        public AddBase1():void {
            this._P1Bases++;
        }

        public AddBase2():void {
            this._P2Bases++;
        }

        public SubstractBase1():void {
            this._P1Bases--;
            if(this._P1Bases <= 0) {
                this._P2Victories++;
            }
        }

        public SubstractBase2():void {
            this._P2Bases--;
            if(this._P2Bases <= 0) {
                this._P1Victories++;
            }
        }

        public isBattleOver():boolean {
            return this._P1Bases == 0 || this._P2Bases == 0;
        }
    }
}