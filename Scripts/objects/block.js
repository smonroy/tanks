var objects;
(function (objects) {
    class Block extends objects.GameObject {
        // private
        // public
        // contructor
        constructor(level, type, x, y) {
            let image_random = Math.floor(Math.random() * config.IMAGES[level][type].length);
            super(config.IMAGES[level][type][image_random]);
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
        }
    }
    objects.Block = Block;
})(objects || (objects = {}));
//# sourceMappingURL=block.js.map