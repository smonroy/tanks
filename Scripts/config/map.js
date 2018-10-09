var config;
(function (config) {
    let BlockType;
    (function (BlockType) {
        BlockType[BlockType["B1"] = 0] = "B1";
        BlockType[BlockType["B2"] = 1] = "B2";
        BlockType[BlockType["IN"] = 2] = "IN";
        BlockType[BlockType["D1"] = 3] = "D1";
        BlockType[BlockType["D2"] = 4] = "D2";
        BlockType[BlockType["T1"] = 5] = "T1";
        BlockType[BlockType["T2"] = 6] = "T2";
        BlockType[BlockType["__"] = 7] = "__";
    })(BlockType = config.BlockType || (config.BlockType = {}));
    config.SCREEN_WITH = 1024; //640;
    config.SCREEN_HEIGHT = 768; //480;
    config.BLOCK_SIZE = 32;
    var _ = config.BlockType;
    config.GRID = [
        [
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.T2, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.D1, _.D1, _.D1, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.D1, _.D1, _.D1],
            [_.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__],
            [_.D2, _.__, _.__, _.D2, _.D1, _.D1, _.D1, _.D1, _.D1, _.D2, _.__, _.__, _.D2, _.D1, _.D1, _.D1, _.D1, _.D1, _.D2, _.__, _.__, _.D2],
            [_.B1, _.__, _.__, _.D2, _.D1, _.D1, _.IN, _.IN, _.IN, _.IN, _.D1, _.D1, _.IN, _.IN, _.IN, _.IN, _.D1, _.D1, _.D2, _.__, _.__, _.B2],
            [_.B1, _.__, _.__, _.D2, _.D1, _.D1, _.IN, _.IN, _.IN, _.IN, _.D1, _.D1, _.IN, _.IN, _.IN, _.IN, _.D1, _.D1, _.D2, _.__, _.__, _.B2],
            [_.D2, _.__, _.__, _.D2, _.D1, _.D1, _.D1, _.D1, _.D1, _.D2, _.__, _.__, _.D2, _.D1, _.D1, _.D1, _.D1, _.D1, _.D2, _.__, _.__, _.D2],
            [_.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__],
            [_.D1, _.D1, _.D1, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.D1, _.D1, _.D1],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.T1, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
        ],
        [
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.__, _.T1, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.D1, _.D1, _.D1, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.D1, _.D1, _.D1],
            [_.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__],
            [_.D2, _.__, _.__, _.D2, _.D1, _.D1, _.D1, _.D1, _.D1, _.D2, _.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.D1, _.D1, _.D1, _.D1, _.D1, _.D2, _.__, _.__, _.D2],
            [_.B1, _.__, _.__, _.D2, _.D1, _.D1, _.IN, _.IN, _.IN, _.IN, _.D1, _.__, _.__, _.__, _.__, _.D1, _.IN, _.IN, _.IN, _.IN, _.D1, _.D1, _.D2, _.__, _.__, _.B2],
            [_.B1, _.__, _.__, _.D2, _.D1, _.D1, _.IN, _.IN, _.IN, _.IN, _.D1, _.__, _.__, _.__, _.__, _.D1, _.IN, _.IN, _.IN, _.IN, _.D1, _.D1, _.D2, _.__, _.__, _.B2],
            [_.B1, _.__, _.__, _.D2, _.D1, _.D1, _.IN, _.IN, _.IN, _.IN, _.D1, _.__, _.__, _.__, _.__, _.D1, _.IN, _.IN, _.IN, _.IN, _.D1, _.D1, _.D2, _.__, _.__, _.B2],
            [_.D2, _.__, _.__, _.D2, _.D1, _.D1, _.D1, _.D1, _.D1, _.D2, _.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.D1, _.D1, _.D1, _.D1, _.D1, _.D2, _.__, _.__, _.D2],
            [_.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__],
            [_.D1, _.D1, _.D1, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.D1, _.D1, _.D1],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.T2, _.__, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
        ],
        [
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.D1, _.D1, _.D1, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.D1, _.D1, _.D1],
            [_.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__],
            [_.D2, _.__, _.__, _.D2, _.D1, _.D1, _.D1, _.D1, _.D1, _.D2, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.D1, _.D1, _.D1, _.D1, _.D1, _.D2, _.__, _.__, _.D2],
            [_.B1, _.T1, _.__, _.D2, _.D1, _.D1, _.IN, _.IN, _.IN, _.IN, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.IN, _.IN, _.IN, _.IN, _.D1, _.D1, _.D2, _.__, _.__, _.B2],
            [_.B1, _.__, _.__, _.D2, _.D1, _.D1, _.IN, _.IN, _.IN, _.IN, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.IN, _.IN, _.IN, _.IN, _.D1, _.D1, _.D2, _.__, _.T2, _.B2],
            [_.D2, _.__, _.__, _.D2, _.D1, _.D1, _.D1, _.D1, _.D1, _.D2, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.D1, _.D1, _.D1, _.D1, _.D1, _.D2, _.__, _.__, _.D2],
            [_.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__],
            [_.D1, _.D1, _.D1, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.D2, _.D1, _.D1, _.D1],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
            [_.__, _.__, _.__, _.__, _.__, _.__, _.D2, _.__, _.__, _.D1, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.__, _.D1, _.__, _.__, _.D2, _.__, _.__, _.__, _.__, _.__, _.__],
        ]
    ];
    config.IMAGES = [
        [
            ["block_b1"],
            ["block_b2"],
            ["block_in"],
            ["block_d1"],
            ["block_d2"],
        ],
        [
            ["block_b1"],
            ["block_b2"],
            ["block_in"],
            ["block_d1"],
            ["block_d2_2"],
        ],
        [
            ["block_b1"],
            ["block_b2"],
            ["block_in"],
            ["block_d1"],
            ["block_d2", "block_d2_2"],
        ]
    ];
    config.MAP_BACKGROUND = [
        "background1",
        "background2",
        "background3"
    ];
})(config || (config = {}));
//# sourceMappingURL=map.js.map