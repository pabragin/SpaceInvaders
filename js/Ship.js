function Ship(xx,yy)//constructor of the ship
{
    var x = xx;
    var y = yy;
    var sizeX=40;
    var sizeY=24;

    this.move = function (xx, yy)//move ship to x,y
    {
        x = xx;
        y = yy;
    };

    this.getX = function()
    {
        return x;
    };

    this.getY = function()
    {
        return y;
    };

    this.getSizeX = function()
    {
        return sizeX;
    };

    this.getSizeY = function()
    {
        return sizeY;
    };
}