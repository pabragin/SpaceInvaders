function Fire(startX, startY, speedF) {
    "use strict";
    var x = startX,
        y = startY,
        speed = speedF,
        bang = false,
        out = false;
    
    this.getX = function () {
        return x;
    };
    this.getY = function () {
        return y;
    };
    this.isBang = function () {
        return bang;
    };
    this.setBang = function () {
        bang = true;
    };
    this.isOut = function () {
        return out;
    };
    this.setOut = function () {
        out = true;
    };
    this.moveShipFire = function () {
        if (y - speed > -1) {
            y -= speed;
        } else {
            out = true;
        }
    };
}
