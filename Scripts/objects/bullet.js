var objects;
(function (objects) {
    class Bullet extends objects.GameObject {
        // constructors
        constructor(x, y, angle) {
            super("bullet");
            this._speed = 6;
            this.Activate(x, y, angle);
            this.Start();
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
        IsAvailable() {
            return !this._active;
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
                        break;
                    case config.BlockType.IN:
                        break;
                    case config.BlockType.D2:
                        this.Deactivate();
                        break;
                    case config.BlockType.B1:
                    case config.BlockType.B2:
                        managers.Game.map.GetBlock(this.x, this.y).Health--;
                        this.Deactivate();
                        break;
                    case null:
                        this.Deactivate();
                        break;
                    default:
                        managers.Game.map.DestroyBlock(this.x, this.y);
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