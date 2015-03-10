function Star(xx, yy, rad, lum) {
    "use strict";
    var x = xx,
        y = yy,
        radius = rad,
        illumination = lum;
    
    this.getX = function () {
        return x;
    };
    this.getY = function () {
        return y;
    };
    this.getRadius = function () {
        return radius;
    };
    this.setRadius = function (radd) {
        this.radius = radd;
    };
    this.setIllumination = function (lumm) {
        this.illumination = lumm;
    };
}
