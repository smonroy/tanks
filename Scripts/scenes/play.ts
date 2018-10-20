module scenes {
    export class Play extends objects.Scene {

        private _map: objects.Map;
        private _level: number;

        constructor() {
            super();
            managers.Game.currentScene = this;
            this._level = 1;
            this.Start();
        }

        private _levelup(): void {
            this._level++;
            this.Reset()
        }

        public Start(): void {
            this.Reset();
            this.Main();
        };

        public Update(): void {
            this._map.tank1.Update();
            this._map.tank2.Update();
            if (util.Vector2.ManhatDistance(this._map.tank1.Position, this._map.tank2.Position) < (this._map.tank1.Height * 3)) {
                if (managers.Collision.isColliding(this._map.tank1, this._map.tank2)) {
                    this._map.tank1.Reset();
                    this._map.tank2.Reset();
                }
            }
            if (managers.Game.scoreBoard.isBattleOver()) {
                if (this._level == 3) {
                    managers.Game.currentState = config.Scene.START;
                } else {
                    this._levelup();
                }
            }
        };

        public Destroy(): void {
            this.removeAllChildren();
        };

        public Reset(): void {
            this.removeAllChildren();
            managers.Game.scoreBoard.Reset();
            this._map = new objects.Map(this._level, this);
            managers.Game.map = this._map;
            managers.Game.scoreBoard.AddPlayUI(this);
        };

        public Main(): void {
            this.on("click", () => {
                if (this._level == 3) {
                    managers.Game.currentState = config.Scene.START;
                } else {
                    this._levelup();
                }
            });

            managers.Game.scoreBoard.AddPlayUI(this);
        };

    }
}