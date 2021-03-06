module objects {

    export class Tank extends GameObject {

        private _speed: number;
        private _origSpeed: number;
        private _rotationSpeed: number;
        private _origRotationSpeed: number;

        private _playerIndex: number;
        private _forward: util.Vector2;
        private _right: util.Vector2;
        private _bullets: objects.Bullet[];
        private _shootDelay: number[] = [0, 0, 0];
        private _bulletsNum: number;
        private _startPoint: util.Vector2;
        private _turret: objects.Turret;
        private _turretOffset: number;   // factor of halfHeight
        private _enemy: objects.Tank;
        private _stunned: boolean;
        private _stunFrame: number;
        private _stunDelay: number;
        private _fireDelayFactor: number;
        private _origFireDelayFactor: number;
        private _health: number;
        private _origHealth: number;

        get IsStunned(): boolean {
            return this._stunned;
        }

        get Bullets(): objects.Bullet[] {
            return this._bullets;
        }

        get Health(): number {
            return this._health;
        }
        set Health(newHealth: number) {
            this._health = newHealth;
            if (this._health < 1) {
                this.Reset();
            }
        }

        constructor(playerNumber: number, x: number, y: number, scale: number, turret: objects.Turret, stunDelay: number = 1200, health: number = 3) {
            super("tank" + playerNumber);
            this._origFireDelayFactor = 1;
            this._fireDelayFactor = this._origFireDelayFactor;
            this.x = x;
            this.y = y;
            this._startPoint = new util.Vector2(this.x, this.y);
            this.scaleX = scale;
            this.scaleY = scale;
            this._turret = turret;
            this._playerIndex = playerNumber - 1;
            this._speed = 0.5;
            this._origSpeed = 0.5;
            this._rotationSpeed = 0.5;
            this._origRotationSpeed = 0.5;
            this._turretOffset = 0.4;
            this._forward = new util.Vector2(0, -this.HalfHeight * scale);
            this._right = new util.Vector2(this.HalfWidth * scale, 0);
            this._bullets = new Array<objects.Bullet>();
            this._bulletsNum = 0;
            this._stunDelay = stunDelay;
            this._origHealth = health;
            this._health = this._origHealth;
            this.Start();
        }

        private _isPassable(action: config.ActionEnum, xDelta: number = 0, yDelta: number = 0): boolean {
            let forward = this._forward;
            let right = this._right;
            let rotationDelta: number;

            if (action == config.ActionEnum.TurnRight) {
                forward = util.Vector2.Rotate(this._forward, this._rotationSpeed);
                right = util.Vector2.Rotate(this._right, this._rotationSpeed);
                rotationDelta = this._rotationSpeed;
            }
            if (action == config.ActionEnum.TurnLeft) {
                forward = util.Vector2.Rotate(this._forward, -this._rotationSpeed);
                right = util.Vector2.Rotate(this._right, -this._rotationSpeed);
                rotationDelta = -this._rotationSpeed;
            }

            // tank collision
            if (util.Vector2.ManhatDistance(this._enemy.Position, this.Position) < (this.Height * this.scaleY * 2)) {
                if (managers.Collision.isColliding(this, this._enemy, new util.Vector2(xDelta, yDelta), rotationDelta)) {
                    return false;
                }
            }

            for (let i: number = 0; i < config.BUMPERS[action].length; i++) {
                let bumper: util.Vector2 = config.BUMPERS[action][i];
                let cellCalc: util.Vector2 = new util.Vector2(this.x + xDelta + (forward.x * bumper.y) + (right.x * bumper.x),
                    this.y + yDelta + (forward.y * bumper.y) + (right.y * bumper.x));
                if (managers.Game.map.GetCellContent(cellCalc.x, cellCalc.y) != config.BlockType.__) {
                    return false;
                }
            }
            return true;
        }

        public Reset(): void {
            this._health = this._origHealth;
            this.x = this._startPoint.x;
            this.y = this._startPoint.y;
        }

        public SpeedUp() {
            if (this._speed < this._origSpeed * 4) {
                this._speed += this._origSpeed / 2;
                this._rotationSpeed += this._origRotationSpeed;
            }
        }


        public FireUp() {
            if (this._fireDelayFactor > this._origFireDelayFactor / 3) {
                this._fireDelayFactor *= 0.75;
            }
        }

        public Stun() {
            this.Health--;
            createjs.Sound.play("explodeSound", { volume: 0.05 });
            console.log("Health remaining: " + this._health);
            if (!this._stunned) {
                this._stunned = true;
                this._turret.alpha = 0.5;
                this.alpha = 0.5;
                this._stunFrame = Date.now() + this._stunDelay;
            }
        }

        public SetEnemy(enemy: objects.Tank) {
            this._enemy = enemy;
        }

        private _activateBullet(turret: boolean = false, localRotation: number = 0, xOffset: number = 0) {
            let spawnPoint: util.Vector2 = util.Vector2.Rotate(this._forward, localRotation);
            if (turret) {
                spawnPoint = util.Vector2.Multiply(spawnPoint, 1.2);
                spawnPoint.x -= (this._forward.x * this._turretOffset);
                spawnPoint.y -= (this._forward.y * this._turretOffset);
            } else {
                spawnPoint.x += (this._right.x * xOffset);
                spawnPoint.y += (this._right.y * xOffset);
            }
            spawnPoint = util.Vector2.Add(spawnPoint, new util.Vector2(this.x, this.y));
            for (let i: number = 0; i < this._bullets.length; i++) {
                if (this._bullets[i].IsAvailable()) {
                    this._bullets[i].Activate(spawnPoint.x, spawnPoint.y, this.rotation + localRotation, turret ? 2 : 1);
                    return;
                }
            }
            let newBullet = new objects.Bullet(spawnPoint.x, spawnPoint.y, this.rotation + localRotation, "P" + (this._playerIndex + 1), turret ? 2 : 1);
            this._bullets[this._bulletsNum] = newBullet;
            this._bulletsNum++;
            this.parent.addChild(newBullet);
        }

        private _rotate(rotation: number) {
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

            if (!this._stunned) {
                if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.Forward])) {
                    if (this._isPassable(config.ActionEnum.Forward, xd, -yd)) {
                        this.x += xd;
                        this.y -= yd;
                    } else {
                        if (this._isPassable(config.ActionEnum.TurnRight, xd / 2, -yd / 2)) {
                            this._rotate(this._rotationSpeed);
                        } else if (this._isPassable(config.ActionEnum.TurnLeft, xd / 2, -yd / 2)) {
                            this._rotate(-this._rotationSpeed);
                        }
                    }
                }
                if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.Backward])) {
                    if (this._isPassable(config.ActionEnum.Backward, -xd, yd)) {
                        this.x -= xd;
                        this.y += yd;
                    } else {
                        if (this._isPassable(config.ActionEnum.TurnRight, -xd / 2, yd / 2)) {
                            this._rotate(this._rotationSpeed);
                        } else if (this._isPassable(config.ActionEnum.TurnLeft, -xd / 2, yd / 2)) {
                            this._rotate(-this._rotationSpeed);
                        }
                    }
                }
                if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.TurnRight])) {
                    if (this._isPassable(config.ActionEnum.TurnRight)) {
                        this._rotate(this._rotationSpeed);
                    } else {
                        if (this._isPassable(config.ActionEnum.TurnRight, xd / 2, -yd / 2)) {
                            this.x += xd / 2;
                            this.y -= yd / 2;
                        } else if (this._isPassable(config.ActionEnum.TurnRight, -xd / 2, yd / 2)) {
                            this.x -= xd / 2;
                            this.y += yd / 2;
                        }
                    }
                }
                if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.TurnLeft])) {
                    if (this._isPassable(config.ActionEnum.TurnLeft)) {
                        this._rotate(-this._rotationSpeed);
                    } else {
                        if (this._isPassable(config.ActionEnum.TurnLeft, xd / 2, -yd / 2)) {
                            this.x += xd / 2;
                            this.y -= yd / 2;
                        } else if (this._isPassable(config.ActionEnum.TurnLeft, -xd / 2, yd / 2)) {
                            this.x -= xd / 2;
                            this.y += yd / 2;
                        }
                    }
                }

                if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.ShootLeft])) {
                    if (this._shootDelay[config.ShootType.left] < Date.now()) {
                        this._activateBullet(false, 0, -0.7);
                        this._shootDelay[config.ShootType.left] = Date.now() + (config.SHOOT_DELAY_TIME[config.ShootType.left] * this._fireDelayFactor);
                        createjs.Sound.play("bulletShot", { volume: 0.01 });
                    }
                }

                if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.ShootRight])) {
                    if (this._shootDelay[config.ShootType.right] < Date.now()) {
                        this._activateBullet(false, 0, 0.7);
                        this._shootDelay[config.ShootType.right] = Date.now() + (config.SHOOT_DELAY_TIME[config.ShootType.right] * this._fireDelayFactor);
                        createjs.Sound.play("bulletShot", { volume: 0.01 });
                    }
                }

                if (managers.Input.isKeydown(config.INPUT_KEY[this._playerIndex][config.ActionEnum.TurretShoot])) {
                    if (this._shootDelay[config.ShootType.turret] < Date.now()) {
                        this._activateBullet(true, this._turret.GetTurretRotation());
                        createjs.Sound.play("turretShot", { volume: 0.05 });
                        this._shootDelay[config.ShootType.turret] = Date.now() + (config.SHOOT_DELAY_TIME[config.ShootType.turret] * this._fireDelayFactor);
                    }
                }

                this._turret.Update();
            }
            else {
                if (Date.now() > this._stunFrame) {
                    this._turret.alpha = 1;
                    this.alpha = 1;
                    this._stunned = false;
                }
            }

            this._bullets.forEach(bullet => {
                if (!bullet.IsAvailable()) {
                    bullet.Update();
                    if (util.Vector2.ManhatDistance(bullet.Position, this._enemy.Position) < (this._enemy.Height * this.scaleY * 25)) {
                        if (managers.Collision.isCollidingWithCircle(this._enemy, bullet)) {
                            if (!this._enemy.IsStunned) {
                                if (bullet.GetType() == 2) {
                                    this._enemy.Stun();
                                }
                            }
                            bullet.Deactivate();
                        }
                    }
                }
            });

            this._turret.Sync(this.x - (this._forward.x * this._turretOffset), this.y - (this._forward.y * this._turretOffset), this.rotation);
        }

        public Destroy(): void {

        }

    }
}