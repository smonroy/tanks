var objects;
(function (objects) {
    class Block extends objects.GameObject {
        // contructor
        constructor(level, blockType, x, y) {
            let image_random = Math.floor(Math.random() * config.IMAGES[level][blockType].length);
            super(config.IMAGES[level][blockType][image_random]);
            this.blockType = blockType;
            this.x = x;
            this.y = y;
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Start();
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