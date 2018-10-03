module objects {
    export class Background extends objects.GameObject {
        // private
        private _verticalSpeed:number;
        private _horizontalSpeed:number;
        private _isMoving:boolean;

        // public

        // contructor

        constructor() {
            super("background2");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            if(this.x < -(this.Width - config.SCREEN_WITH) || this.x >= 0) {
                this._horizontalSpeed *= -1;
            }
            if(this.y < -(this.Height - config.SCREEN_HEIGHT) || this.y >= 0) {
                this._verticalSpeed *= -1;
            }
        }

        private _move():void {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
        }

        // public methods
        public Reset():void {
            this._isMoving = false;
            this.y = 0;
            this.x = 0;
        }

        public Start():void {
            this.Reset();
            this._verticalSpeed = -0.5;
            this._horizontalSpeed = -0.5;
        }

        public Update():void {
            if(this._isMoving) {
                this._move();
                this._checkBounds();
            }
        }

        public Destroy():void {
            
        }

        public SetMove(move:boolean = true):void{
            this._isMoving = move;
        }
    }
}