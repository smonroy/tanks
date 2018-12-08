var config;
(function (config) {
    let ActionEnum;
    (function (ActionEnum) {
        ActionEnum[ActionEnum["Forward"] = 0] = "Forward";
        ActionEnum[ActionEnum["Backward"] = 1] = "Backward";
        ActionEnum[ActionEnum["TurnRight"] = 2] = "TurnRight";
        ActionEnum[ActionEnum["TurnLeft"] = 3] = "TurnLeft";
        ActionEnum[ActionEnum["ShootLeft"] = 4] = "ShootLeft";
        ActionEnum[ActionEnum["ShootRight"] = 5] = "ShootRight";
        ActionEnum[ActionEnum["TurretLeft"] = 6] = "TurretLeft";
        ActionEnum[ActionEnum["TurretRight"] = 7] = "TurretRight";
        ActionEnum[ActionEnum["TurretShoot"] = 8] = "TurretShoot";
    })(ActionEnum = config.ActionEnum || (config.ActionEnum = {}));
    let PlayerEnum;
    (function (PlayerEnum) {
        PlayerEnum[PlayerEnum["Player1"] = 0] = "Player1";
        PlayerEnum[PlayerEnum["Player2"] = 1] = "Player2";
    })(PlayerEnum = config.PlayerEnum || (config.PlayerEnum = {}));
    let ShootType;
    (function (ShootType) {
        ShootType[ShootType["left"] = 0] = "left";
        ShootType[ShootType["right"] = 1] = "right";
        ShootType[ShootType["turret"] = 2] = "turret";
    })(ShootType = config.ShootType || (config.ShootType = {}));
    ;
    config.SHOOT_DELAY_TIME = [200, 200, 1000];
    config.INPUT_KEY = [
        [
            ["KeyW", "12B0"],
            ["KeyS", "13B0"],
            ["KeyD", "15B0"],
            ["KeyA", "14B0"],
            ["KeyQ", "2B0"],
            ["KeyE", "1B0"],
            ["KeyZ", "6B0"],
            ["KeyC", "7B0"],
            ["KeyX", "0B0"],
        ],
        [
            ["Numpad8", "ArrowUp", "12B1"],
            ["Numpad5", "ArrowDown", "13B1"],
            ["Numpad6", "ArrowRight", "15B1"],
            ["Numpad4", "ArrowLeft", "14B1"],
            ["Numpad7", "Comma", "2B1"],
            ["Numpad9", "Period", "1B1"],
            ["Numpad1", "KeyB", "6B1"],
            ["Numpad2", "KeyN", "7B1"],
            ["Numpad3", "KeyM", "0B1"],
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