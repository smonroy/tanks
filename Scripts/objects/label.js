var objects;
(function (objects) {
    class Label extends createjs.Text {
        // constructor
        /**
         *
         * @param labelString
         * @param fontSize
         * @param fontFamily
         * @param fontColor
         * @param x
         * @param y
         * @param isCenter
         */
        constructor(labelString, fontSize, fontFamily, fontColor, x = 0, y = 0, isCenter = false) {
            super(labelString, fontSize + " " + fontFamily, fontColor);
            this.Width = this.getMeasuredWidth();
            this.Height = this.getMeasuredHeight();
            if (isCenter) {
                this.regX = this.HalfWidth;
                this.regY = this.HalfHeight;
            }
            this.x = x;
            this.y = y;
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
    }
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map