module objects {
    export class Bullet extends objects.GameObject {
        private _speed: number;
        private _active: boolean;
        private _owner: string;
        private _type:number; // type of bullet: 1 = body bullet, 2 = turret bullet

        // constructors
        constructor(x: number, y: number, angle: number, owner:string, type:number = 1) {
            super("bullet" + type);
            this._owner = owner;
            this.Activate(x, y, angle, type);
            this.Start();
        }

        // private methods

        // public methods

        public IsAvailable() {
            return !this._active;
        }

        public GetType() {
            return this._type;
        }
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
        }

        public Activate(x: number, y: number, angle: number, type:number = 1): void {
            this._active = true;
            this._type = type;
            this._speed = this._type == 1 ? 7: 4;
            this.rotation = angle;
            this.image = managers.Game.assetMnager.getResult("bullet" + this._type) as HTMLImageElement;
            this.x = x;
            this.y = y;
        }

        public Deactivate() {
            this._active = false;
            this.x = -100;
        }

        public Update(): void {
            if (this._active) {
                let xd = this._speed * Math.sin(this.rotation * Math.PI / 180);
                let yd = this._speed * Math.cos(this.rotation * Math.PI / 180);
                this.x += xd;
                this.y -= yd;
                let blockType: config.BlockType = managers.Game.map.GetCellContent(this.x, this.y);
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

        public Reset() {

        }

        public Destroy() {

        }
    }
}