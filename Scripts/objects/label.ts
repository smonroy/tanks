module objects {
    export class Label extends createjs.Text {
        // private instance variables
        private _with: number;
        private _height: number;
        private _halfWidth: number;
        private _halfHeight: number;
        private _outlineLabel: createjs.Text;

        // public properties
        get Width(): number {
            return this._with;
        }

        set Width(newValue: number) {
            this._with = newValue;
            this.HalfWidth = this._with * .5;
        }

        get Height(): number {
            return this._height;
        }

        set Height(newValue: number) {
            this._height = newValue;
            this.HalfHeight = this._height * .5;
        }

        get HalfWidth(): number {
            return this._halfWidth;
        }

        set HalfWidth(newValue: number) {
            this._halfWidth = newValue;
        }

        get HalfHeight(): number {
            return this._halfHeight;
        }

        set HalfHeight(newValue: number) {
            this._halfHeight = newValue;
        }

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
        constructor(labelString: string, fontSize: string, fontFamily: string, fontColor: string, x: number = 0, y: number = 0, isCenter: boolean = false, outline: number = 0, outlineColor: string = "black") {
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

        // private methods

        // public methods
    }
}