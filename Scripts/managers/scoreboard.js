var managers;
(function (managers) {
    class ScoreBoard {
        // contructor
        constructor(p1Bases = 0, p2bases = 0, p1Victories = 0, p2Victories = 0) {
            this.Start();
            this._P1Bases = p1Bases;
            this._P2Bases = p2bases;
            this._P1Victories = p1Victories;
            this._P2Victories = p2Victories;
        }
        get _P1Bases() {
            return this._p1Bases;
        }
        set _P1Bases(newValue) {
            this._p1Bases = newValue;
            this._p1BasesLabel.text = "Bases: " + this._p1Bases;
        }
        get _P2Bases() {
            return this._p2Bases;
        }
        set _P2Bases(newValue) {
            this._p2Bases = newValue;
            this._p2BasesLabel.text = "Bases: " + this._p2Bases;
        }
        get _P1Victories() {
            return this._p1Victories;
        }
        set _P1Victories(newValue) {
            this._p1Victories = newValue;
            this._p1VictoriesLabel.text = "Wins: " + this._p1Victories;
        }
        get _P2Victories() {
            return this._p2Victories;
        }
        set _P2Victories(newValue) {
            this._p2Victories = newValue;
            this._p2VictoriesLabel.text = "Wins: " + this._p2Victories;
        }
        // private methods
        // public methods
        Start() {
            this._p1BasesLabel = new objects.Label("Bases: 9", "30px", "Consolas", "#FFFF00", 40, 5, false);
            this._p1BasesLabel.shadow = new createjs.Shadow("black", 3, 3, 1);
            this._p1VictoriesLabel = new objects.Label("Wins: 9", "30px", "Consolas", "#00FF00", 210, 5, false);
            this._p1VictoriesLabel.shadow = new createjs.Shadow("black", 3, 3, 1);
            this._p2BasesLabel = new objects.Label("Bases: 9", "30px", "Consolas", "#FFFF00", 700, 5, false);
            this._p2BasesLabel.shadow = new createjs.Shadow("black", 3, 3, 1);
            this._p2VictoriesLabel = new objects.Label("Wins: 9", "30px", "Consolas", "#00FF00", 870, 5, false);
            this._p2VictoriesLabel.shadow = new createjs.Shadow("black", 3, 3, 1);
        }
        AddPlayUI(currentScene) {
            currentScene.addChild(this._p1BasesLabel);
            currentScene.addChild(this._p1VictoriesLabel);
            currentScene.addChild(this._p2BasesLabel);
            currentScene.addChild(this._p2VictoriesLabel);
        }
        Reset(p1Bases = 0, p2bases = 0) {
            this._p1Bases = p1Bases;
            this._p2Bases = p2bases;
        }
        AddGameOverUI(currentScene) {
            currentScene.addChild(this._p1VictoriesLabel);
            currentScene.addChild(this._p2VictoriesLabel);
        }
        AddBase1() {
            this._P1Bases++;
        }
        AddBase2() {
            this._P2Bases++;
        }
        SubstractBase1() {
            this._P1Bases--;
            if (this._P1Bases <= 0) {
                this._P2Victories++;
            }
        }
        SubstractBase2() {
            this._P2Bases--;
            if (this._P2Bases <= 0) {
                this._P1Victories++;
            }
        }
        isBattleOver() {
            return this._P1Bases == 0 || this._P2Bases == 0;
        }
        isMatchOver() {
            return this._P1Victories >= 3 || this._P2Victories >= 3;
        }
    }
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map