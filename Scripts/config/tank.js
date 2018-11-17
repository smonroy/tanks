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
            ["KeyW"],
            ["KeyS"],
            ["KeyD"],
            ["KeyA"],
            ["KeyQ"],
            ["KeyE"],
            ["KeyZ"],
            ["KeyC"],
            ["KeyX"],
        ],
        [
            ["Numpad8", "ArrowUp"],
            ["Numpad5", "ArrowDown"],
            ["Numpad6", "ArrowRight"],
            ["Numpad4", "ArrowLeft"],
            ["Numpad7", "Comma"],
            ["Numpad9", "Period"],
            ["Numpad1", "KeyB"],
            ["Numpad3", "KeyM"],
            ["Numpad2", "KeyN"],
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