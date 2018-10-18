module objects {
    export class Block extends objects.GameObject {
        // private
        
        // public
        public blockType:config.BlockType;
        
        // contructor

        constructor(level:number, blockType:config.BlockType, x:number, y:number) {
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
        public Reset():void {
        }

        public Start():void {
            this.Reset();
        }

        public Update():void {

        }

        public Destroy():void {
            managers.Game.currentScene.removeChild(this);
        }
    }
}