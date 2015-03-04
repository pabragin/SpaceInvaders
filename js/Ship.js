function Ship(xx,yy)//constructor of the ship
{
    var x = xx;
    var y = yy;

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

    this.getXY = function()
    {
        return [x,y];
    }
}