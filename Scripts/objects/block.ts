module objects {
    export class Block extends objects.GameObject {
        // private
        private _health: number;
        private _origHealth: number;

        // public
        public blockType: config.BlockType;
        get Health(): number {
            return this._health;
        }
        set Health(newHealth: number) {
            this._health = newHealth;
            if (this._health < 1) {
                switch (this.blockType) {
                    case config.BlockType.B1:
                        managers.Game.scoreBoard.SubstractBase1();
                        break;
                    case config.BlockType.B2:
                        managers.Game.scoreBoard.SubstractBase2();
                        break;
                    default:
                        let randPowerup = Math.floor(Math.random() * 16);
                        if (randPowerup === 1) {
                            let powerup: objects.Powerup = new objects.Powerup(config.PowerupType.SpeedUp, this.x, this.y);
                            managers.Game.map.powerups.push(powerup);
                            this.parent.addChild(powerup);
                        }
                        else if (randPowerup === 2) {
                            let powerup: objects.Powerup = new objects.Powerup(config.PowerupType.FireRateUp, this.x, this.y);
                            managers.Game.map.powerups.push(powerup);
                            this.parent.addChild(powerup);
                        }
                        break;
                }
                managers.Game.map.DestroyBlock(this.x, this.y);
            }
            else {
                this.alpha = this._health / this._origHealth;
            }
        }

        // contructor

        constructor(level: number, blockType: config.BlockType, x: number, y: number, health: number = 1) {
            let image_random = Math.floor(Math.random() * config.IMAGES[level][blockType].length);
            super(config.IMAGES[level][blockType][image_random]);

            this.blockType = blockType;
            this.x = x;
            this.y = y;
            this._origHealth = health;
            this.Health = health;

            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;

            this.Start();
        }

        // private methods

        // public methods
        public Reset(): void {
        }

        public Start(): void {
            this.Reset();
        }

        public Update(): void {

        }

        public Destroy(): void {
            managers.Game.currentScene.removeChild(this);
        }
    }
}