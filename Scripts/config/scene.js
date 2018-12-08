var config;
(function (config) {
    let Scene;
    (function (Scene) {
        Scene[Scene["START"] = 0] = "START";
        Scene[Scene["INSTRUCTIONS"] = 1] = "INSTRUCTIONS";
        Scene[Scene["PLAY"] = 2] = "PLAY";
        Scene[Scene["OVER"] = 3] = "OVER";
        Scene[Scene["SCENE_COUNT"] = 4] = "SCENE_COUNT";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map