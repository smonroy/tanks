var config;
(function (config) {
    let ActionEnum;
    (function (ActionEnum) {
        ActionEnum[ActionEnum["Forward"] = 0] = "Forward";
        ActionEnum[ActionEnum["Backward"] = 1] = "Backward";
        ActionEnum[ActionEnum["TurnRight"] = 2] = "TurnRight";
        ActionEnum[ActionEnum["TurnLeft"] = 3] = "TurnLeft";
        ActionEnum[ActionEnum["Shoot1"] = 4] = "Shoot1";
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
            "KeyX" // shoot 1
        ],
        [
            "ArrowUp",
            "ArrowDown",
            "ArrowRight",
            "ArrowLeft",
            "KeyM" // shoot 1
        ]
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