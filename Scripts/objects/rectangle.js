var objects;
(function (objects) {
    class Rectangle extends objects.GameObject {
        constructor() {
            super("tank");
            this.speed = 4;
            this.rotationSpeed = 2;
            this.Start();
        }
        Reset() {
            throw new Error("Method not implemented.");
        }
        Start() {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.x = 150;
            this.y = 150;
            this.scaleX = 3;
            this.scaleY = 3;
        }
        Update() {
            if (managers.Input.isKeydown("ArrowUp")) {
                this.x += this.speed * Math.sin(this.rotation * Math.PI / 180);
                this.y -= this.speed * Math.cos(this.rotation * Math.PI / 180);
            }
            if (managers.Input.isKeydown("ArrowDown")) {
                this.x -= this.speed * Math.sin(this.rotation * Math.PI / 180);
                this.y += this.speed * Math.cos(this.rotation * Math.PI / 180);
            }
            if (managers.Input.isKeydown("ArrowRight")) {
                this.rotation += this.rotationSpeed;
            }
            if (managers.Input.isKeydown("ArrowLeft")) {
                this.rotation -= this.rotationSpeed;
            }
        }
        Destroy() {
            throw new Error("Method not implemented.");
        }
        Move() {
        }
    }
    objects.Rectangle = Rectangle;
})(objects || (objects = {}));
//# sourceMappingURL=rectangle.js.map