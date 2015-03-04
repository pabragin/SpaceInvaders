function Fire(startX, startY, speedF)
{
    var x=startX;
    var y=startY;
    var speed=speedF;
    var bang=false;

    this.getX = function()
    {
        return x;
    };
    this.getY = function()
    {
        return y;
    };
    this.getXY = function()
    {
        return [x,y];
    };
    this.isBang = function()
    {
        return bang;
    };
    this.moveShipFire = function() {

        if (y - speed > -1) {
            y -= speed;
        }
        else {
            bang = true;
        }
    };
}
