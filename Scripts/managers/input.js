var managers;
(function (managers) {
    class Input {
        static isKeydown(keys) {
            for (let index = 0; index < keys.length; index++) {
                if (Input.keys[keys[index]]) {
                    return true;
                }
            }
            return false;
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
            Input.keys[e.code] = true;
        }
        static HandleUpInput(e) {
            Input.keys[e.code] = false;
        }
    }
    Input.keys = {};
    managers.Input = Input;
})(managers || (managers = {}));
//# sourceMappingURL=input.js.map