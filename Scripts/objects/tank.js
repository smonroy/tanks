var objects;
(function (objects) {
    class Tank extends objects.GameObject {
        constructor(playerNumner, x, y, scale) {
            super("tank");
            this.speed = 4;
            this.rotationSpeed = 2;
            this.x = x;
            this.y = y;
            this.scaleX = scale;
            this.scaleY = scale;
            this.playerIndex = playerNumner - 1;
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
            if (managers.Input.isKeydown(config.INPUT_KEY[this.playerIndex][config.ActionEnum.Forward])) {
                this.x += this.speed * Math.sin(this.rotation * Math.PI / 180);
                this.y -= this.speed * Math.cos(this.rotation * Math.PI / 180);
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this.playerIndex][config.ActionEnum.Backward])) {
                this.x -= this.speed * Math.sin(this.rotation * Math.PI / 180);
                this.y += this.speed * Math.cos(this.rotation * Math.PI / 180);
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this.playerIndex][config.ActionEnum.TurnRight])) {
                this.rotation += this.rotationSpeed;
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this.playerIndex][config.ActionEnum.TurnLeft])) {
                this.rotation -= this.rotationSpeed;
            }
        }
        Destroy() {
            throw new Error("Method not implemented.");
        }
        Move() {
        }
    }
    objects.Tank = Tank;
})(objects || (objects = {}));
//# sourceMappingURL=tank.js.map