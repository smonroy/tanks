var objects;
(function (objects) {
    class Button extends createjs.Bitmap {
        // constructor
        constructor(imageString, x = 0, y = 0, isCenter = false) {
            super(managers.Game.assetMnager.getResult(imageString));
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            if (isCenter) {
                this.regX = this.HalfWidth;
                this.regY = this.HalfHeight;
            }
            this.x = x;
            this.y = y;
            this.on("mouseover", this._over);
            this.on("mouseout", this._out);
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
        _over(event) {
            this.alpha = 0.7;
        }
        _out(event) {
            this.alpha = 1.0;
        }
    }
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map