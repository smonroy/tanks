var objects;
(function (objects) {
    class GameObject extends createjs.Bitmap {
        // constructors
        constructor(imageString) {
            super(managers.Game.assetMnager.getResult(imageString));
            this._initialize();
        }
        // public properties
        get Width() {
            return this._with;
        }
        set Width(newValue) {
            this._with = newValue;
            this.HalfWidth = this._with * .5;
        }
        get Height() {
            return this._height;
        }
        set Height(newValue) {
            this._height = newValue;
            this.HalfHeight = this._height * .5;
        }
        get HalfWidth() {
            return this._halfWidth;
        }
        set HalfWidth(newValue) {
            this._halfWidth = newValue;
        }
        get HalfHeight() {
            return this._halfHeight;
        }
        set HalfHeight(newValue) {
            this._halfHeight = newValue;
        }
        // private methods
        _initialize() {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
        }
    }
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map