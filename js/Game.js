function Game(gameCanvas)//game constructor
{
    var gameField = new Gamefield(gameCanvas);
    var ship = new Ship((gameCanvas.width/2), gameCanvas.height-10);
    var fireArr = [];
    var config = {
        fps: 30,
        fireSpeed: 3,
        shipStep: 1
    };

    this.moveShipLeft = function()
    {
        ship.move(ship.getX()-config.shipStep,ship.getY());
    };

    this.moveShipRight = function()
    {
        ship.move(ship.getX()+config.shipStep,ship.getY());
    };

    this.shipFire = function()
    {
        var newFire =new Fire(ship.getX(), ship.getY(), config.fireSpeed);
        fireArr.push(newFire);
    };

    var moveAllFires = function()
    {

        for(var i=0;i<fireArr.length;i++)
        {
            fireArr[i].moveShipFire();
            if(fireArr[i].isBang())
            {
                fireArr.splice(i,1);
            }
        }
    };

    this.start = function ()//start main loop
    {
        setInterval(function(){gameField.redraw(ship.getXY(), fireArr)}, 1000/config.fps);
        setInterval(function(){moveAllFires()}, 1000/config.fps);
    };
}