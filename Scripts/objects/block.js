var objects;
(function (objects) {
    class Block extends objects.GameObject {
        // contructor
        constructor(level, blockType, x, y, health = 1) {
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
        get Health() {
            return this._health;
        }
        set Health(newHealth) {
            this._health = newHealth;
            if (this._health < 1) {
                switch (this.blockType) {
                    case config.BlockType.B1:
                        managers.Game.scoreBoard.SubstractBase1();
                        createjs.Sound.play("explodeSound", { volume: 0.06 });
                        break;
                    case config.BlockType.B2:
                        managers.Game.scoreBoard.SubstractBase2();
                        createjs.Sound.play("explodeSound", { volume: 0.06 });
                        break;
                    default:
                        createjs.Sound.play("boxHit", { volume: 0.025 });
                        let randPowerup = Math.floor(Math.random() * 16);
                        if (randPowerup === 1) {
                            let powerup = new objects.Powerup(config.PowerupType.SpeedUp, this.x, this.y);
                            managers.Game.map.powerups.push(powerup);
                            this.parent.addChild(powerup);
                        }
                        else if (randPowerup === 2) {
                            let powerup = new objects.Powerup(config.PowerupType.FireRateUp, this.x, this.y);
                            managers.Game.map.powerups.push(powerup);
                            this.parent.addChild(powerup);
                        }
                        break;
                }
                managers.Game.map.DestroyBlock(this.x, this.y);
            }
            else {
                this.alpha = (this._health + 3) / (this._origHealth + 3);
            }
        }
        // private methods
        // public methods
        Reset() {
        }
        Start() {
            this.Reset();
        }
        Update() {
        }
        Destroy() {
            managers.Game.currentScene.removeChild(this);
        }
    }
    objects.Block = Block;
})(objects || (objects = {}));
//# sourceMappingURL=block.js.map