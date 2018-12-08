var objects;
(function (objects) {
    class Powerup extends objects.GameObject {
        // constructor
        constructor(powerupType, x, y) {
            let imgStr = config.POWERUP_IMAGES[powerupType];
            super(imgStr);
            this.powerupType = powerupType;
            this.x = x;
            this.y = y;
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            // this.Start();
        }
        // private methods
        // public methods
        applyPowerup(tank) {
            switch (this.powerupType) {
                case config.PowerupType.SpeedUp:
                    tank.SpeedUp();
                    this.Destroy();
                    break;
                case config.PowerupType.FireRateUp:
                    tank.FireUp();
                    this.Destroy();
                    break;
            }
        }
        Reset() {
        }
        Start() {
            this.Reset();
        }
        Update() {
        }
        Destroy() {
            createjs.Sound.play("powerupSound", { volume: 0.05 });
            this.powerupType = config.PowerupType.NoPowerup;
            this.parent.removeChild(this);
        }
    }
    objects.Powerup = Powerup;
})(objects || (objects = {}));
//# sourceMappingURL=powerup.js.map