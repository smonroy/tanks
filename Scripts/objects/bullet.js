var objects;
(function (objects) {
    class Bullet extends objects.GameObject {
        // constructors
        constructor(x, y, angle, owner) {
            super("bullet");
            this._speed = 6;
            this._owner = owner;
            this.Activate(x, y, angle);
            this.Start();
        }
        get IsAvailable() {
            return !this._active;
        }
        // private methods
        // public methods
        Start() {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
        }
        Activate(x, y, angle) {
            this._active = true;
            this.rotation = angle;
            this.x = x;
            this.y = y;
        }
        Deactivate() {
            this._active = false;
            this.x = -100;
        }
        Update() {
            if (this._active) {
                let xd = this._speed * Math.sin(this.rotation * Math.PI / 180);
                let yd = this._speed * Math.cos(this.rotation * Math.PI / 180);
                this.x += xd;
                this.y -= yd;
                let blockType = managers.Game.map.GetCellContent(this.x, this.y);
                switch (blockType) {
                    case config.BlockType.__:
                    case config.BlockType.IN:
                        break;
                    case config.BlockType.D2:
                    case null:
                        this.Deactivate();
                        break;
                    default:
                        managers.Game.map.GetBlock(this.x, this.y).Health--;
                        this.Deactivate();
                        break;
                }
            }
        }
        Reset() {
        }
        Destroy() {
        }
    }
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map