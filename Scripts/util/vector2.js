var util;
(function (util) {
    class Vector2 extends createjs.Point {
        // private
        // public
        // contructor
        constructor(x = 0, y = 0) {
            super(x, y);
        }
        // private M
        // public M
        /**
         *
         *
         * @static
         * @param {util.Vector2} vec1
         * @param {util.Vector2} vec2
         * @returns {number}
         * @memberof Vector2
         */
        static Distance(vec1, vec2) {
            return Math.floor(Math.sqrt(Math.pow(vec1.x - vec2.x, 2) + Math.pow(vec1.y - vec2.y, 2)));
        }
        static SquaredDistance(vec1, vec2) {
            let xD = vec1.x - vec2.x;
            let yD = vec1.y - vec2.y;
            return (xD * xD) + (yD * yD);
        }
        static ManhatDistance(vec1, vec2) {
            return Math.abs(vec1.x - vec2.x) + Math.abs(vec1.y - vec2.y);
        }
        /**
         *
         *
         * @static
         * @param {util.Vector2} vec1
         * @param {util.Vector2} vec2
         * @returns {util.Vector2}
         * @memberof Vector2
         */
        static Add(vec1, vec2) {
            let result = new util.Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
            return result;
        }
        static Multiply(vec1, scalar) {
            let result = new util.Vector2(vec1.x * scalar, vec1.y * scalar);
            return result;
        }
        static Subtract(vec1, vec2) {
            let result = new util.Vector2(vec1.x - vec2.x, vec1.y - vec2.y);
            return result;
        }
        static Multiply(vec1, scalar) {
            let result = new util.Vector2(vec1.x * scalar, vec1.y * scalar);
            return result;
        }
        static Divide(vec1, scalar) {
            let result = new util.Vector2(vec1.x / scalar, vec1.y / scalar);
            return result;
        }
        static Rotate(vec, angle) {
            let sin = Math.sin(angle * Math.PI / 180);
            let cos = Math.cos(angle * Math.PI / 180);
            return new Vector2(cos * vec.x - sin * vec.y, sin * vec.x + cos * vec.y);
        }
        static Dot(vec1, vec2) {
            return (vec1.x * vec2.x) + (vec1.y * vec2.y);
        }
    }
    util.Vector2 = Vector2;
})(util || (util = {}));
//# sourceMappingURL=vector2.js.map