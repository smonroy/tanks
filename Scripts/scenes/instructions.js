var scenes;
(function (scenes) {
    class Instructions extends objects.Scene {
        //public props
        //constructor
        constructor() {
            super();
            this._flavourText = "Destroy the other player's base in this tank vs. tank combat game!\n\n"
                + "Use the strong, but slow-firing turret to disable the enemy and the left and right machine guns to "
                + "break through the boxes to reach the enemy base.";
            this._controlsText = "Controls:                        P1                   P2\n"
                + "Move (forward/back):            W/S        Up arrow(↑)/Down arrow(↓)\n"
                + "Turn (left/right):              A/D      Left arrow(←)/Right arrow(→)\n"
                + "Machine gun (left/right):       Q/E           Comma(,)/Period(.)\n"
                + "Turret rotate (left/right):     Z/C                  B/M\n"
                + "Turret fire:                     X                    N\n";
            this._font = "Consolas";
            this.Start();
        }
        //private methods
        //public methods
        Reset() {
        }
        Destroy() {
            this.removeAllChildren();
        }
        Start() {
            this._background = new objects.Background();
            this._background.SetMove(true);
            this._welcomeLbl = new objects.Label("Instructions", "60px", this._font, "#FFFF00", config.SCREEN_WITH / 2, 60, true);
            this._welcomeLbl.shadow = new createjs.Shadow("black", 5, 5, 5);
            this._instructionLbl = new objects.Label(this._flavourText, "30px", this._font, "#FFFF00", config.SCREEN_WITH / 2, 125, false);
            this._instructionLbl.lineWidth = config.SCREEN_WITH - 75;
            this._instructionLbl.lineHeight = 30;
            this._instructionLbl.textAlign = "center";
            this._instructionLbl.shadow = new createjs.Shadow("black", 4, 4, 3);
            this._instructionLbl2 = new objects.Label(this._controlsText, "25px", this._font, "#FFFF00", 40, 350, false);
            this._instructionLbl2.lineHeight = 30;
            this._instructionLbl2.textAlign = "left";
            this._instructionLbl2.shadow = new createjs.Shadow("black", 3, 3, 3);
            this._menuBtn = new objects.Button("menuButton", config.SCREEN_WITH / 2, config.SCREEN_HEIGHT - 100, true);
            this.Main();
        }
        Update() {
            this._background.Update();
        }
        Main() {
            this.addChild(this._background);
            this.addChild(this._welcomeLbl);
            this.addChild(this._instructionLbl);
            this.addChild(this._instructionLbl2);
            this.addChild(this._menuBtn);
            this._menuBtn.on("click", () => {
                managers.Game.currentState = config.Scene.START;
            });
        }
    }
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map