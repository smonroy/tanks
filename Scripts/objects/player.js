var objects;
(function (objects) {
    class Player extends objects.GameObject {
        // constructors
        constructor() {
            super("plane");
            this.Start();
        }
        // private methods
        // public methods
        Start() {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.y = 435;
        }
        Update() {
            this.x = managers.Game.stage.mouseX;
            if (this.x > 640 - this.HalfWidth) {
                this.x = 640 - this.HalfWidth;
            }
            if (this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
            }
        }
        Reset() {
        }
        Destroy() {
        }
    }
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map