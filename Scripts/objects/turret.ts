module objects {
    export class Turret extends objects.GameObject {
        private _playerIndex:number;
        private _localRotation:number;
        private _rotationSpeed:number;
        private _bodyRotation:number;

        constructor(playerNumner:number, x:number, y:number, scale: number) {
            super("turret" + playerNumner);
            this._playerIndex = playerNumner - 1;
            this.x = x;
            this.y = y;
            this.scaleX = scale; 
            this.scaleY = scale;
            this._rotationSpeed = 0.5;
            this._localRotation = 0;
            this.regX = this.HalfWidth;
            this.regY = this.Height * 0.85;
        }

        public Sync(x:number, y:number, rotation:number):void {
            this.x = x;
            this.y = y;
            this._bodyRotation = rotation;
            this.rotation = this._bodyRotation + this._localRotation;
        }

        public Reset(): void {

        }        
        public Start(): void {

        }
        public Update(): void {
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.TurretLeft])) {
                this._localRotation -= this._rotationSpeed;
                this.rotation = this._bodyRotation + this._localRotation;
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.TurretRight])) {
                this._localRotation += this._rotationSpeed;
                this.rotation = this._bodyRotation + this._localRotation;
            }
        }

        public Destroy(): void {

        }

        public GetTurretRotation():number {
            return this._localRotation;
        }
    }
}