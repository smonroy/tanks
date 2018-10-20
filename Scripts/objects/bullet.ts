module objects {
    export class Bullet extends objects.GameObject {
        private _speed:number;
        private _active:boolean

        // constructors
        constructor(x:number, y:number, angle:number) {
            super("bullet");
            this._speed = 6;
            this.Activate(x, y, angle);
            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
        }

        public Activate(x:number, y:number, angle:number):void {
            this._active = true;
            this.rotation = angle;
            this.x = x;
            this.y = y;
        }   

        public Deactivate() {
            this._active = false;
            this.x = -100;
        }

        public IsAvailable() {
            return !this._active;
        }

        public Update():void {
            if(this._active) {
                let xd = this._speed * Math.sin(this.rotation * Math.PI / 180);
                let yd = this._speed * Math.cos(this.rotation * Math.PI / 180);
                this.x += xd;
                this.y -= yd;
                let blockType:config.BlockType = managers.Game.map.GetCellContent(this.x, this.y);
                switch(blockType) {
                    case config.BlockType.__:
                        break;
                    case config.BlockType.IN:
                        break;
                    case config.BlockType.D2:
                        this.Deactivate();
                        break;
                    case null:
                        this.Deactivate();
                        break;
                    default:
                        managers.Game.map.DestroyBlock(this.x, this.y);
                        if(blockType == config.BlockType.B1) managers.Game.scoreBoard.SubstractBase1();
                        if(blockType == config.BlockType.B2) managers.Game.scoreBoard.SubstractBase2();
                        this.Deactivate();
                        break;
                }
            }
        }

        public Reset() {

        }
        
        public Destroy() {

        }
    }
}