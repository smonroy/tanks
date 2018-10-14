module objects {
    export class Tank extends GameObject {

        private _speed:number;
        private _rotationSpeed:number;
        private _playerIndex:number;
        private _forward:util.Vector2;
        private _right:util.Vector2;


        constructor(playerNumner:number, x:number, y:number, scale:number) {
            super("tank");
            this.x = x;
            this.y = y;
            this.scaleX = scale;
            this.scaleY = scale;
            this._playerIndex = playerNumner - 1;
            this._speed = 2;
            this._rotationSpeed = 2;
            this._forward = new util.Vector2(0, -this.HalfHeight * scale);
            this._right = new util.Vector2(this.HalfWidth * scale, 0);
            this.Start();
        }

        private _isPassable(action:config.ActionEnum, xDelta:number = 0, yDelta:number = 0):boolean {
            let xScalar = 0;
            let yScalar = 1;
            for (let i:number = 0; i < config.BUMPERS[action].length; i++) {
                let bumper:util.Vector2 = config.BUMPERS[action][i];
                if (managers.Game.map.GetCellContent(this.x + xDelta + (this._forward.x * bumper.y) + (this._right.x * bumper.x), 
                                                    this.y + yDelta + (this._forward.y * bumper.y) + (this._right.y * bumper.x)) != config.BlockType.__) {
                    return false
                }
            }
            return true;
        }

        public Reset(): void {
            throw new Error("Method not implemented.");
        }

        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
        }

        public Update(): void {
            
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.Forward])) {
                let xd = this._speed * Math.sin(this.rotation * Math.PI / 180);
                let yd = this._speed * Math.cos(this.rotation * Math.PI / 180);
                if (this._isPassable(config.ActionEnum.Forward, xd, -yd)) {
                    this.x += xd;
                    this.y -= yd;
                }
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.Backward])) {
                let xd = this._speed * Math.sin(this.rotation * Math.PI / 180);
                let yd = this._speed * Math.cos(this.rotation * Math.PI / 180);
                if (this._isPassable(config.ActionEnum.Backward, -xd, yd)) {
                    this.x -= xd;
                    this.y += yd;
                }
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.TurnRight])) {
                let forward = this._forward;
                let righ = this._right;
                this._forward = util.Vector2.Rotate(this._forward, this._rotationSpeed);               
                this._right = util.Vector2.Rotate(this._right, this._rotationSpeed);
                if (this._isPassable(config.ActionEnum.TurnRight)) {
                    this.rotation += this._rotationSpeed;
                } else {
                    this._forward = forward;
                    this._right = righ;
                }
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.TurnLeft])) {
                let forward = this._forward;
                let righ = this._right;
                this._forward = util.Vector2.Rotate(this._forward, -this._rotationSpeed);               
                this._right = util.Vector2.Rotate(this._right, -this._rotationSpeed); 
                if (this._isPassable(config.ActionEnum.TurnLeft)) {              
                    this.rotation -= this._rotationSpeed;
                } else {
                    this._forward = forward;
                    this._right = righ;
                }
            }

        }
        public Destroy(): void {
            throw new Error("Method not implemented.");
        }

    }
}