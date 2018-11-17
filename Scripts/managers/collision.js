var managers;
(function (managers) {
    class Collision {
        static isColliding(go1, go2, go1Offset = new util.Vector2(0, 0), rotationDelta) {
            let axes = [
                new util.Vector2(Math.cos(go1.rotation * Math.PI / 180), Math.sin(go1.rotation * Math.PI / 180)),
                new util.Vector2(-Math.sin(go1.rotation * Math.PI / 180), Math.cos(go1.rotation * Math.PI / 180)),
                new util.Vector2(Math.cos(go2.rotation * Math.PI / 180), Math.sin(go2.rotation * Math.PI / 180)),
                new util.Vector2(-Math.sin(go2.rotation * Math.PI / 180), Math.cos(go2.rotation * Math.PI / 180))
            ];
            if (rotationDelta != 0) {
                axes[0] = util.Vector2.Rotate(axes[0], rotationDelta);
                axes[1] = util.Vector2.Rotate(axes[1], rotationDelta);
            }
            let verts1 = go1.getCorners(go1Offset.x, go1Offset.y, rotationDelta);
            //console.log(verts1);
            let verts2 = go2.getCorners();
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
                // console.log("max1", max1);
                // console.log("min1", min1);
                // console.log("max2", max2);
                // console.log("min2", min2);
                // overlap check
                let r1 = max1 - min1;
                let r2 = max2 - min2;
                let r = Math.max(max1, max2) - Math.min(min1, min2);
                // console.log (r, r1, r2);
                if (r1 + r2 < r) {
                    return false;
                }
            }
            return true;
        }
        static isCollidingWithPoint(go1, go2) {
            let axes = [
                new util.Vector2(Math.cos(go1.rotation * Math.PI / 180), Math.sin(go1.rotation * Math.PI / 180)),
                new util.Vector2(-Math.sin(go1.rotation * Math.PI / 180), Math.cos(go1.rotation * Math.PI / 180))
            ];
            let verts1 = go1.getCorners();
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
                // project point to each axis
                let proj_v2 = util.Vector2.Dot(new util.Vector2(go2.x, go2.y), axes[i]);
                // overlap check
                let r1 = max1 - min1;
                let r = Math.max(max1, proj_v2) - Math.min(min1, proj_v2);
                if (r1 < r) {
                    return false;
                }
            }
            return true;
        }
    }
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map