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
            let forward = this._forward;
            let right = this._right;

            if(action == config.ActionEnum.TurnRight) {
                forward = util.Vector2.Rotate(this._forward, this._rotationSpeed);               
                right = util.Vector2.Rotate(this._right, this._rotationSpeed);
            }
            if(action == config.ActionEnum.TurnLeft) {
                forward = util.Vector2.Rotate(this._forward, -this._rotationSpeed);               
                right = util.Vector2.Rotate(this._right, -this._rotationSpeed);
            }
            for (let i:number = 0; i < config.BUMPERS[action].length; i++) {
                let bumper:util.Vector2 = config.BUMPERS[action][i];
                if (managers.Game.map.GetCellContent(this.x + xDelta + (forward.x * bumper.y) + (right.x * bumper.x), 
                                                     this.y + yDelta + (forward.y * bumper.y) + (right.y * bumper.x)) != config.BlockType.__) {
                    return false
                }
            }
            return true;
        }

        public Reset(): void {
            throw new Error("Method not implemented.");
        }

        private _rotate(rotation:number) {
            this.rotation += rotation;
            this._forward = util.Vector2.Rotate(this._forward, rotation);               
            this._right = util.Vector2.Rotate(this._right, rotation);
        }

        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
        }

        public Update(): void {
            let xd = this._speed * Math.sin(this.rotation * Math.PI / 180);
            let yd = this._speed * Math.cos(this.rotation * Math.PI / 180);
            
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.Forward])) {
                if (this._isPassable(config.ActionEnum.Forward, xd, -yd)) {
                    this.x += xd;
                    this.y -= yd;
                } else {
                    if (this._isPassable(config.ActionEnum.TurnRight, xd/2, -yd/2)) { 
                        this._rotate(this._rotationSpeed);
                    } else if (this._isPassable(config.ActionEnum.TurnLeft, xd/2, -yd/2)) { 
                        this._rotate(-this._rotationSpeed);
                    }
                }
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.Backward])) {
                if (this._isPassable(config.ActionEnum.Backward, -xd, yd)) {
                    this.x -= xd;
                    this.y += yd;
                } else {
                    if (this._isPassable(config.ActionEnum.TurnRight, -xd/2, yd/2)) { 
                        this._rotate(this._rotationSpeed);
                    } else if (this._isPassable(config.ActionEnum.TurnLeft, -xd/2, yd/2)) { 
                        this._rotate(-this._rotationSpeed);
                    }
                }
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.TurnRight])) {
                if (this._isPassable(config.ActionEnum.TurnRight)) {
                    this._rotate(this._rotationSpeed);
                } else {
                    if (this._isPassable(config.ActionEnum.TurnRight, xd/2, -yd/2)) {
                        this.x += xd/2;
                        this.y -= yd/2;
                    } else if (this._isPassable(config.ActionEnum.TurnRight, -xd/2, yd/2)) {
                        this.x -= xd/2;
                        this.y += yd/2;
                    }
                }
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.TurnLeft])) {
                if (this._isPassable(config.ActionEnum.TurnLeft)) {  
                    this._rotate(-this._rotationSpeed);            
                } else {
                    if (this._isPassable(config.ActionEnum.TurnLeft, xd/2, -yd/2)) {
                        this.x += xd/2;
                        this.y -= yd/2;
                    } else if (this._isPassable(config.ActionEnum.TurnLeft, -xd/2, yd/2)) {
                        this.x -= xd/2;
                        this.y += yd/2;
                    }
                }
            }

        }
        public Destroy(): void {
            throw new Error("Method not implemented.");
        }

    }
}