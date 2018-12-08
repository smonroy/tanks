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
        constructor(labelString, fontSize, fontFamily, fontColor, x = 0, y = 0, isCenter = false, outline = 0, outlineColor = "black") {
            super(labelString, fontSize + " " + fontFamily, fontColor);
            this.Width = this.getMeasuredWidth();
            this.Height = this.getMeasuredHeight();
            if (isCenter) {
                this.regX = this.HalfWidth;
                this.regY = this.HalfHeight;
            }
            if (outline > 0) {
                if (isCenter) {
                    this._outlineLabel.regX = this.HalfWidth;
                    this._outlineLabel.regY = this.HalfHeight;
                }
                this._outlineLabel = new createjs.Text(labelString, fontSize + " " + fontFamily, outlineColor);
                this._outlineLabel.outline = outline;
                this._outlineLabel.lineWidth = this.lineWidth;
                this._outlineLabel.lineHeight = this.lineHeight;
                this._outlineLabel.textAlign = this.textAlign;
                this._outlineLabel.x = x;
                this._outlineLabel.y = y;
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