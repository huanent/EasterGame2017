var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Helper = (function () {
    function Helper() {
    }
    /**
     * 获取图片
     */
    Helper.getBitmap = function (name, width, height, x, y) {
        if (width === void 0) { width = null; }
        if (height === void 0) { height = null; }
        if (x === void 0) { x = null; }
        if (y === void 0) { y = null; }
        var bitmap = new egret.Bitmap(RES.getRes(name));
        if (width != null) {
            bitmap.width = width;
        }
        if (height != null) {
            bitmap.height = height;
        }
        if (x != null) {
            bitmap.x = x;
        }
        if (y != null) {
            bitmap.y = y;
        }
        return bitmap;
    };
    /**
     *  对象水平居中
     */
    Helper.ObjectCenterX = function (obj) {
        obj.x = (this.width - obj.width) / 2;
    };
    /**
    *  对象垂直居中
    */
    Helper.ObjectCenterY = function (obj) {
        obj.y = (this.width - obj.height) / 2;
    };
    /**
    *  对象居中
    */
    Helper.ObjectCenter = function (obj) {
        obj.x = (this.width - obj.width) / 2;
        obj.y = (this.height - obj.height) / 2;
    };
    return Helper;
}());
Helper.width = 720;
Helper.height = 1155;
__reflect(Helper.prototype, "Helper");
//# sourceMappingURL=Helper.js.map