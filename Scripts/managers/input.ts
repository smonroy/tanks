module managers {
    export class Input {

        public static keys: { [key: string]: boolean } = {}
        public static isKeydown(key: string): boolean {
            //if (Input.keys[key] === undefined) {
           //     return false;
           // }else {
                return Input.keys[key];
            //}
        }

        static ShowInput(e: KeyboardEvent, not?: boolean) {
            if (not) {
                console.log(e.key + " Not");
            } else {
                console.log(e.key);
            }
        }
        static HandleInput(e: KeyboardEvent) {
            this.ShowInput(e);
            Input.keys[e.code] = true;

        }
        static HandleUpInput(e) {
            this.ShowInput(e, true);
            Input.keys[e.code] = false;
        }
    }
}