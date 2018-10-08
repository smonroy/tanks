var managers;
(function (managers) {
    class Input {
        static isKeydown(key) {
            //if (Input.keys[key] === undefined) {
            //     return false;
            // }else {
            return Input.keys[key];
            //}
        }
        static ShowInput(e, not) {
            if (not) {
                console.log(e.key + " Not");
            }
            else {
                console.log(e.key);
            }
        }
        static HandleInput(e) {
            this.ShowInput(e);
            Input.keys[e.code] = true;
        }
        static HandleUpInput(e) {
            this.ShowInput(e, true);
            Input.keys[e.code] = false;
        }
    }
    Input.keys = {};
    managers.Input = Input;
})(managers || (managers = {}));
//# sourceMappingURL=input.js.map