var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TimeOutEvent = (function (_super) {
    __extends(TimeOutEvent, _super);
    /**
     *事件结束事件
     */
    function TimeOutEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        return _super.call(this, type, bubbles, cancelable) || this;
    }
    return TimeOutEvent;
}(egret.Event));
TimeOutEvent.NAME = "TimeOutEvent";
__reflect(TimeOutEvent.prototype, "TimeOutEvent");
TimeOutEvent;
//# sourceMappingURL=TimeOutEvent.js.map