function Game(gameCanvas)//game constructor
{
    var gameField = new Gamefield(gameCanvas);
    var ship = new Ship((gameCanvas.width/2), gameCanvas.height-10);
    var fireArr = new FireArray();
    var intervalId=[];
    var config = {
        fps: 30,
        fireSpeed: 30,
        shipStep: 1
    };

    this.moveShipLeft = function()
    {
        ship.move(ship.getX()-config.shipStep,ship.getY());
    }

    this.moveShipRight = function()
    {
        ship.move(ship.getX()+config.shipStep,ship.getY());
    }

    this.shipFire = function()
    {
        var newFire =new Fire(ship.getX(), ship.getY());
        fireArr.add(newFire);
    }

    this.start = function ()//start main loop
    {
        intervalId = setInterval(function(){gameField.redraw(ship.getXY(), fireArr.getAsArray())}, 1000/config.fps);
    }
}