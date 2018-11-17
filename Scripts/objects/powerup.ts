module objects {
    export class Powerup extends objects.GameObject {
        // private vars

        // public props
        public powerupType: config.PowerupType;

        // constructor
        constructor(powerupType: config.PowerupType, x: number, y: number) {
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
        public applyPowerup(tank: objects.Tank) {
            switch(this.powerupType) {
                case config.PowerupType.SpeedUp:
                    tank.SpeedUp();
                    this.Destroy();
                    break;
                case config.PowerupType.FireRateUp:
                    //TODO: add method for increasing fire rate of tank
                    this.Destroy();
                    break;
            }
        }

        public Reset(): void {
        }
        public Start(): void {
            this.Reset();
        }
        public Update(): void {
        }
        public Destroy(): void {
            this.powerupType = config.PowerupType.NoPowerup;
            this.parent.removeChild(this);
        }
    }
}