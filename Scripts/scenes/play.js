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
        }
        ;
        Destroy() {
            this.removeAllChildren();
        }
        ;
        Reset() {
            this.removeAllChildren();
            this._map = new objects.Map(this._level, this);
            managers.Game.map = this._map;
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
        }
        ;
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map