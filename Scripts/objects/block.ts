module objects {
    export class Block extends objects.GameObject {
        // private

        // public

        // contructor

        constructor(level:number, type:config.BlockType, x:number, y:number) {
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
        public Reset():void {
        }

        public Start():void {
            this.Reset();
        }

        public Update():void {

        }

        public Destroy():void {
            
        }
    }
}