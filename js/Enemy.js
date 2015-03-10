function Enemy(xx, yy, speedF) {//constructor of the enemy
    "use strict";
    var x = xx,
        y = yy,
        speed = speedF,
        bang = false,
        out = false,
        sizeX = 40,
        sizeY = 24;

    this.step = function () {//step enemy to x,y
        y = y + speed;
    };

    this.getX = function () {
        return x;
    };

    this.getY = function () {
        return y;
    };

    this.getSizeX = function () {
        return sizeX;
    };

    this.getSizeY = function () {
        return sizeY;
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
}