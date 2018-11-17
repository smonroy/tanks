var scenes;
(function (scenes) {
    class Play extends objects.Scene {
        constructor() {
            super();
            managers.Game.currentScene = this;
            this._level = 1;
            this.Start();
        }
        _levelup() {
            this._level++;
            this.Reset();
        }
        Start() {
            this.Reset();
            this.Main();
        }
        ;
        Update() {
            this._map.tank1.Update();
            this._map.tank2.Update();
            // if (util.Vector2.ManhatDistance(this._map.tank1.Position, this._map.tank2.Position) < (this._map.tank1.Height * 5)) {
            //     if (managers.Collision.isColliding(this._map.tank1, this._map.tank2)) {
            //         this._map.tank1.Reset();
            //         this._map.tank2.Reset();
            //     }
            // }
            if (managers.Game.scoreBoard.isBattleOver()) {
                if (this._level == 3) {
                    managers.Game.currentState = config.Scene.START;
                }
                else {
                    this._levelup();
                }
            }
        }
        ;
        Destroy() {
            this.removeAllChildren();
        }
        ;
        Reset() {
            this.removeAllChildren();
            managers.Game.scoreBoard.Reset();
            this._map = new objects.Map(this._level, this);
            managers.Game.map = this._map;
            managers.Game.scoreBoard.AddPlayUI(this);
        }
        ;
        Main() {
            this.on("click", () => {
                if (this._level == 3) {
                    managers.Game.currentState = config.Scene.START;
                }
                else {
                    this._levelup();
                }
            });
            managers.Game.scoreBoard.AddPlayUI(this);
        }
        ;
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map