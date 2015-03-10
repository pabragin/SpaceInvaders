function Ship(xx, yy) {//constructor of the ship
    "use strict";
    var x = xx,
        y = yy,
        sizeX = 40,
        sizeY = 60;

    this.move = function (xx, yy) {//move ship to x,y
        x = xx;
        y = yy;
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
}