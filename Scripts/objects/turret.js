var objects;
(function (objects) {
    class Turret extends objects.GameObject {
        constructor(playerNumner, x, y, scale) {
            super("turret" + playerNumner);
            this._playerIndex = playerNumner - 1;
            this.x = x;
            this.y = y;
            this.scaleX = scale;
            this.scaleY = scale;
            this._rotationSpeed = 0.5;
            this._localRotation = 0;
            this.regX = this.HalfWidth;
            this.regY = this.Height * 0.85;
        }
        Sync(x, y, rotation) {
            this.x = x;
            this.y = y;
            this._bodyRotation = rotation;
            this.rotation = this._bodyRotation + this._localRotation;
        }
        Reset() {
        }
        Start() {
        }
        Update() {
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.TurretLeft])) {
                this._localRotation -= this._rotationSpeed;
                this.rotation = this._bodyRotation + this._localRotation;
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.TurretRight])) {
                this._localRotation += this._rotationSpeed;
                this.rotation = this._bodyRotation + this._localRotation;
            }
        }
        Destroy() {
        }
        GetTurretRotation() {
            return this._localRotation;
        }
    }
    objects.Turret = Turret;
})(objects || (objects = {}));
//# sourceMappingURL=turret.js.map