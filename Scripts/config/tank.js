var config;
(function (config) {
    let ActionEnum;
    (function (ActionEnum) {
        ActionEnum[ActionEnum["Forward"] = 0] = "Forward";
        ActionEnum[ActionEnum["Backward"] = 1] = "Backward";
        ActionEnum[ActionEnum["TurnRight"] = 2] = "TurnRight";
        ActionEnum[ActionEnum["TurnLeft"] = 3] = "TurnLeft";
        ActionEnum[ActionEnum["Shoot1"] = 4] = "Shoot1";
        ActionEnum[ActionEnum["TurretLeft"] = 5] = "TurretLeft";
        ActionEnum[ActionEnum["TurretRight"] = 6] = "TurretRight";
        ActionEnum[ActionEnum["TurretShoot"] = 7] = "TurretShoot";
    })(ActionEnum = config.ActionEnum || (config.ActionEnum = {}));
    let PlayerEnum;
    (function (PlayerEnum) {
        PlayerEnum[PlayerEnum["Player1"] = 0] = "Player1";
        PlayerEnum[PlayerEnum["Player2"] = 1] = "Player2";
    })(PlayerEnum = config.PlayerEnum || (config.PlayerEnum = {}));
    config.INPUT_KEY = [
        [
            "KeyW",
            "KeyS",
            "KeyD",
            "KeyA",
            "KeyE",
            "KeyZ",
            "KeyC",
            "KeyX",
        ],
        // [ // Player 2
        //     "ArrowUp",      // Forward
        //     "ArrowDown",    // Backward
        //     "ArrowRight",   // TurnRight
        //     "ArrowLeft",    // TurnLeft
        //     "KeyM",         // Shoot 1
        //     "Comma",        // TurretLeft
        //     "Period",       // TurretRight
        //     "KeyN",         // TurretShoot
        // ],
        [
            "Numpad8",
            "Numpad5",
            "Numpad6",
            "Numpad4",
            "Numpad9",
            "Numpad1",
            "Numpad3",
            "Numpad2",
        ],
    ];
    config.BUMPERS = [
        [
            new util.Vector2(-1, 1),
            new util.Vector2(-0.5, 1),
            new util.Vector2(0, 1),
            new util.Vector2(0.5, 1),
            new util.Vector2(1, 1),
        ],
        [
            new util.Vector2(-1, -1),
            new util.Vector2(-0.5, -1),
            new util.Vector2(0, -1),
            new util.Vector2(0.5, -1),
            new util.Vector2(1, -1),
        ],
        [
            new util.Vector2(1, 1),
            new util.Vector2(1, 0.5),
            new util.Vector2(-1, -1),
            new util.Vector2(-1, -0.5),
            new util.Vector2(-1, 1),
            new util.Vector2(-1, 0.5),
            new util.Vector2(1, -1),
            new util.Vector2(1, -0.5),
        ],
        [
            new util.Vector2(-1, 1),
            new util.Vector2(-1, 0.5),
            new util.Vector2(1, -1),
            new util.Vector2(1, -0.5),
            new util.Vector2(1, 1),
            new util.Vector2(0.5, 1),
            new util.Vector2(-1, -1),
            new util.Vector2(-0.5, -1),
        ],
    ];
})(config || (config = {}));
//# sourceMappingURL=tank.js.map