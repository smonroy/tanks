module objects {
    export class Player extends objects.GameObject {
         
        // constructors
        constructor() {
            super("plane");
            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.y = 435;
       }

        public Update():void {
            this.x = managers.Game.stage.mouseX;
            if(this.x > 640 - this.HalfWidth) {
                this.x = 640 - this.HalfWidth;
            }
            if(this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
            }
        }

        public Reset() {

        }
        
        public Destroy() {

        }
    }
}