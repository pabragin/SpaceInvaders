function Fire(startX, startY, speedF)
{
    var x=startX;
    var y=startY;
    var speed=speedF;
    var bang=false;
    var out=false;

    this.getX = function()
    {
        return x;
    };
    this.getY = function()
    {
        return y;
    };
    this.isBang = function()
    {
        return bang;
    };
    this.setBang = function()
    {
        bang=true;
    };
    this.isOut = function()
    {
        return out;
    };
    this.setOut = function()
    {
        out=true;
    };
    this.moveShipFire = function()
    {
        if (y - speed > -1) {
            y -= speed;
        }
        else {
            out = true;
        }
    };
}
