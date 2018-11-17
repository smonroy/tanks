var config;
(function (config) {
    let PowerupType;
    (function (PowerupType) {
        PowerupType[PowerupType["SpeedUp"] = 0] = "SpeedUp";
        PowerupType[PowerupType["FireRateUp"] = 1] = "FireRateUp";
        PowerupType[PowerupType["PowerupNum"] = 2] = "PowerupNum";
        PowerupType[PowerupType["NoPowerup"] = 3] = "NoPowerup";
    })(PowerupType = config.PowerupType || (config.PowerupType = {}));
    config.POWERUP_IMAGES = [
        "speedUp",
        "fireRateUp",
    ];
})(config || (config = {}));
//# sourceMappingURL=powerup.js.map