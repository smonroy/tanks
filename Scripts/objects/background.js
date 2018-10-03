var objects;
(function (objects) {
    class Background extends objects.GameObject {
        // public
        // contructor
        constructor() {
            super("background2");
            this.Start();
        }
        // private methods
        _checkBounds() {
            if (this.x < -(this.Width - config.SCREEN_WITH) || this.x >= 0) {
                this._horizontalSpeed *= -1;
            }
            if (this.y < -(this.Height - config.SCREEN_HEIGHT) || this.y >= 0) {
                this._verticalSpeed *= -1;
            }
        }
        _move() {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
        }
        // public methods
        Reset() {
            this._isMoving = false;
            this.y = 0;
            this.x = 0;
        }
        Start() {
            this.Reset();
            this._verticalSpeed = -0.5;
            this._horizontalSpeed = -0.5;
        }
        Update() {
            if (this._isMoving) {
                this._move();
                this._checkBounds();
            }
        }
        Destroy() {
        }
        SetMove(move = true) {
            this._isMoving = move;
        }
    }
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map