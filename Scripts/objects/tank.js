var objects;
(function (objects) {
    class Tank extends objects.GameObject {
        constructor(playerNumber, x, y, scale, turret) {
            super("tank" + playerNumber);
            this.x = x;
            this.y = y;
            this._startPoint = new util.Vector2(this.x, this.y);
            this.scaleX = scale;
            this.scaleY = scale;
            this._turret = turret;
            this._initialize();
            this._playerIndex = playerNumber - 1;
            this._speed = 2;
            this._rotationSpeed = 2;
            this._turretOffset = 0.4;
            this._forward = new util.Vector2(0, -this.HalfHeight * scale);
            this._right = new util.Vector2(this.HalfWidth * scale, 0);
            this._bullets = new Array();
            this._bulletsNum = 0;
            this.Start();
        }
        get Bullets() {
            return this._bullets;
        }
        _isPassable(action, xDelta = 0, yDelta = 0) {
            //let xScalar = 0;
            //let yScalar = 1;
            let forward = this._forward;
            let right = this._right;
            if (action == config.ActionEnum.TurnRight) {
                forward = util.Vector2.Rotate(this._forward, this._rotationSpeed);
                right = util.Vector2.Rotate(this._right, this._rotationSpeed);
            }
            if (action == config.ActionEnum.TurnLeft) {
                forward = util.Vector2.Rotate(this._forward, -this._rotationSpeed);
                right = util.Vector2.Rotate(this._right, -this._rotationSpeed);
            }
            for (let i = 0; i < config.BUMPERS[action].length; i++) {
                let bumper = config.BUMPERS[action][i];
                if (managers.Game.map.GetCellContent(this.x + xDelta + (forward.x * bumper.y) + (right.x * bumper.x), this.y + yDelta + (forward.y * bumper.y) + (right.y * bumper.x)) != config.BlockType.__) {
                    return false;
                }
            }
            return true;
        }
        Reset() {
            this.x = this._startPoint.x;
            this.y = this._startPoint.y;
        }
        _activateBullet(turret = false, localRotation = 0) {
            let spawnPoint = util.Vector2.Rotate(this._forward, localRotation);
            if (turret) {
                spawnPoint.x -= (this._forward.x * this._turretOffset);
                spawnPoint.y -= (this._forward.y * this._turretOffset);
            }
            spawnPoint = util.Vector2.Add(spawnPoint, new util.Vector2(this.x, this.y));
            for (let i = 0; i < this._bullets.length; i++) {
                if (this._bullets[i].IsAvailable()) {
                    this._bullets[i].Activate(spawnPoint.x, spawnPoint.y, this.rotation + localRotation);
                    return;
                }
            }
            let newBullet = new objects.Bullet(spawnPoint.x, spawnPoint.y, this.rotation + localRotation);
            this._bullets[this._bulletsNum] = newBullet;
            this._bulletsNum++;
            this.parent.addChild(newBullet);
            console.log("bullets: " + this._bulletsNum);
        }
        _rotate(rotation) {
            this.rotation += rotation;
            this._forward = util.Vector2.Rotate(this._forward, rotation);
            this._right = util.Vector2.Rotate(this._right, rotation);
        }
        Start() {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            console.log(this.HalfHeight, this.HalfWidth);
        }
        Update() {
            let xd = this._speed * Math.sin(this.rotation * Math.PI / 180);
            let yd = this._speed * Math.cos(this.rotation * Math.PI / 180);
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.Forward])) {
                if (this._isPassable(config.ActionEnum.Forward, xd, -yd)) {
                    this.x += xd;
                    this.y -= yd;
                }
                else {
                    if (this._isPassable(config.ActionEnum.TurnRight, xd / 2, -yd / 2)) {
                        this._rotate(this._rotationSpeed);
                    }
                    else if (this._isPassable(config.ActionEnum.TurnLeft, xd / 2, -yd / 2)) {
                        this._rotate(-this._rotationSpeed);
                    }
                }
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.Backward])) {
                if (this._isPassable(config.ActionEnum.Backward, -xd, yd)) {
                    this.x -= xd;
                    this.y += yd;
                }
                else {
                    if (this._isPassable(config.ActionEnum.TurnRight, -xd / 2, yd / 2)) {
                        this._rotate(this._rotationSpeed);
                    }
                    else if (this._isPassable(config.ActionEnum.TurnLeft, -xd / 2, yd / 2)) {
                        this._rotate(-this._rotationSpeed);
                    }
                }
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.TurnRight])) {
                if (this._isPassable(config.ActionEnum.TurnRight)) {
                    this._rotate(this._rotationSpeed);
                }
                else {
                    if (this._isPassable(config.ActionEnum.TurnRight, xd / 2, -yd / 2)) {
                        this.x += xd / 2;
                        this.y -= yd / 2;
                    }
                    else if (this._isPassable(config.ActionEnum.TurnRight, -xd / 2, yd / 2)) {
                        this.x -= xd / 2;
                        this.y += yd / 2;
                    }
                }
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.TurnLeft])) {
                if (this._isPassable(config.ActionEnum.TurnLeft)) {
                    this._rotate(-this._rotationSpeed);
                }
                else {
                    if (this._isPassable(config.ActionEnum.TurnLeft, xd / 2, -yd / 2)) {
                        this.x += xd / 2;
                        this.y -= yd / 2;
                    }
                    else if (this._isPassable(config.ActionEnum.TurnLeft, -xd / 2, yd / 2)) {
                        this.x -= xd / 2;
                        this.y += yd / 2;
                    }
                }
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.Shoot1])) {
                if (!this._shoot1) {
                    this._activateBullet();
                    this._shoot1 = true;
                }
            }
            else {
                this._shoot1 = false;
            }
            if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.TurretShoot])) {
                if (!this._shoot2) {
                    this._activateBullet(true, this._turret.GetTurretRotation());
                    this._shoot2 = true;
                }
            }
            else {
                this._shoot2 = false;
            }
            this._bullets.forEach(bullet => {
                bullet.Update();
            });
            this._turret.Update();
            this._turret.Sync(this.x - (this._forward.x * this._turretOffset), this.y - (this._forward.y * this._turretOffset), this.rotation);
        }
        Destroy() {
            throw new Error("Method not implemented.");
        }
    }
    objects.Tank = Tank;
})(objects || (objects = {}));
//# sourceMappingURL=tank.js.map