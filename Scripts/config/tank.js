var config;
(function (config) {
    let ActionEnum;
    (function (ActionEnum) {
        ActionEnum[ActionEnum["Forward"] = 0] = "Forward";
        ActionEnum[ActionEnum["Backward"] = 1] = "Backward";
        ActionEnum[ActionEnum["TurnRight"] = 2] = "TurnRight";
        ActionEnum[ActionEnum["TurnLeft"] = 3] = "TurnLeft";
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
            "KeyA" // TurnLeft
        ],
        [
            "ArrowUp",
            "ArrowDown",
            "ArrowRight",
            "ArrowLeft" // TurnLeft
        ]
    ];
})(config || (config = {}));
//# sourceMappingURL=tank.js.map