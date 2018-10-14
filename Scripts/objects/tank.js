var objects;
(function (objects) {
    class Tank extends objects.GameObject {
        constructor(playerNumner, x, y, scale) {
            super("tank");
            this.x = x;
            this.y = y;
            this.scaleX = scale;
            this.scaleY = scale;
            this._playerIndex = playerNumner - 1;
            this._speed = 2;
            this._rotationSpeed = 2;
            this._forward = new util.Vector2(0, -this.HalfHeight * scale);
            this._right = new util.Vector2(this.HalfWidth * scale, 0);
            this.Start();
        }
        Reset() {
            throw new Error("Method not implemented.");
        }
        Start() {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
        }
        Update() {
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.Forward])) {
                let xd = this._speed * Math.sin(this.rotation * Math.PI / 180);
                let yd = this._speed * Math.cos(this.rotation * Math.PI / 180);
                if (this._isPassable(config.ActionEnum.Forward, xd, -yd)) {
                    this.x += xd;
                    this.y -= yd;
                }
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.Backward])) {
                let xd = this._speed * Math.sin(this.rotation * Math.PI / 180);
                let yd = this._speed * Math.cos(this.rotation * Math.PI / 180);
                if (this._isPassable(config.ActionEnum.Backward, -xd, yd)) {
                    this.x -= xd;
                    this.y += yd;
                }
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.TurnRight])) {
                let forward = this._forward;
                let righ = this._right;
                this._forward = util.Vector2.Rotate(this._forward, this._rotationSpeed);
                this._right = util.Vector2.Rotate(this._right, this._rotationSpeed);
                if (this._isPassable(config.ActionEnum.TurnRight)) {
                    this.rotation += this._rotationSpeed;
                }
                else {
                    this._forward = forward;
                    this._right = righ;
                }
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.TurnLeft])) {
                let forward = this._forward;
                let righ = this._right;
                this._forward = util.Vector2.Rotate(this._forward, -this._rotationSpeed);
                this._right = util.Vector2.Rotate(this._right, -this._rotationSpeed);
                if (this._isPassable(config.ActionEnum.TurnLeft)) {
                    this.rotation -= this._rotationSpeed;
                }
                else {
                    this._forward = forward;
                    this._right = righ;
                }
            }
        }
        Destroy() {
            throw new Error("Method not implemented.");
        }
        _isPassable(action, xDelta = 0, yDelta = 0) {
            let xScalar = 0;
            let yScalar = 1;
            for (let i = 0; i < config.BUMPERS[action].length; i++) {
                let bumper = config.BUMPERS[action][i];
                if (managers.Game.map.GetCellContent(this.x + xDelta + (this._forward.x * bumper.y) + (this._right.x * bumper.x), this.y + yDelta + (this._forward.y * bumper.y) + (this._right.y * bumper.x)) != config.BlockType.__) {
                    return false;
                }
            }
            return true;
            // return (managers.Game.map.GetCellContent(this.x + xDelta + this._forward.x * yScalar + this._right.x * xScalar, 
            //                                          this.y + yDelta + this._forward.y * yScalar + this._right.y * xScalar) == config.BlockType.__);
        }
    }
    objects.Tank = Tank;
})(objects || (objects = {}));
//# sourceMappingURL=tank.js.map