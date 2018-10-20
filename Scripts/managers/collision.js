var managers;
(function (managers) {
    class Collision {
        static isColliding(Go1, Go2) {
            let axes = [
                new util.Vector2(Math.cos(Go1.rotation), Math.sin(Go1.rotation)),
                new util.Vector2(-Math.sin(Go1.rotation), Math.cos(Go1.rotation)),
                new util.Vector2(Math.cos(Go2.rotation), Math.sin(Go2.rotation)),
                new util.Vector2(-Math.sin(Go2.rotation), Math.cos(Go2.rotation))
            ];
            let verts1 = Go1.getCorners();
            //console.log(verts1);
            let verts2 = Go2.getCorners();
            //console.log(verts2);
            // project vertices to each axis
            for (let i = 0; i < axes.length; ++i) {
                // find max and min from verts1
                let proj_v1 = util.Vector2.Dot(verts1[0], axes[i]);
                let min1 = proj_v1;
                let max1 = proj_v1;
                for (let j = 1; j < verts1.length; ++j) {
                    proj_v1 = util.Vector2.Dot(verts1[j], axes[i]);
                    min1 = Math.min(min1, proj_v1);
                    max1 = Math.max(max1, proj_v1);
                }
                // find max and min from verts2
                let proj_v2 = util.Vector2.Dot(verts2[0], axes[i]);
                let min2 = proj_v2;
                let max2 = proj_v2;
                for (let j = 1; j < verts2.length; ++j) {
                    proj_v2 = util.Vector2.Dot(verts2[j], axes[i]);
                    min2 = Math.min(min2, proj_v2);
                    max2 = Math.max(max2, proj_v2);
                }
                //console.log("max1", max1);
                //console.log("min1", min1);
                //console.log("max2", max2);
                //console.log("min2", min2);
                // overlap check
                let r1 = max1 - min1;
                let r2 = max2 - min2;
                let r = Math.max(max1, max2) - Math.min(min1, min2);
                if (r1 + r2 <= r) {
                    return false;
                }
            }
            return true;
        }
    }
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map