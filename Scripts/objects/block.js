var objects;
(function (objects) {
    class Block extends objects.GameObject {
        // contructor
        constructor(level, blockType, x, y, health = 1) {
            let image_random = Math.floor(Math.random() * config.IMAGES[level][blockType].length);
            super(config.IMAGES[level][blockType][image_random]);
            this.blockType = blockType;
            this.x = x;
            this.y = y;
            this._origHealth = health;
            this.Health = health;
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Start();
        }
        get Health() {
            return this._health;
        }
        set Health(newHealth) {
            this._health = newHealth;
            if (this._health < 1) {
                if (this.blockType === config.BlockType.B1) {
                    managers.Game.scoreBoard.SubstractBase1();
                }
                else if (this.blockType === config.BlockType.B2) {
                    managers.Game.scoreBoard.SubstractBase2();
                }
                managers.Game.map.DestroyBlock(this.x, this.y);
            }
            else {
                this.alpha = this._health / this._origHealth;
            }
        }
        // private methods
        // public methods
        Reset() {
        }
        Start() {
            this.Reset();
        }
        Update() {
        }
        Destroy() {
            managers.Game.currentScene.removeChild(this);
        }
    }
    objects.Block = Block;
})(objects || (objects = {}));
//# sourceMappingURL=block.js.map