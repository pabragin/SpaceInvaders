function Gamefield(gameCanvasIn)//game field constructor
{
    var gameCanvas = gameCanvasIn.getContext("2d");

    var drawShip = function (xy)//draw ship on game field
    {
        gameCanvas.fillStyle = "black";
        gameCanvas.fillRect(xy[0]-5, xy[1], 10, 8);
    }

    var drawFire = function (fireArr)//draw ship on game field
    {
        gameCanvas.fillStyle = "red";
        for(var i=0; i<fireArr.length;i++) {
            gameCanvas.fillRect(fireArr[i][0], fireArr[i][1], 1, 4);
        }
    }

    this.redraw = function (shipxy, fireArr)//redraw game field
    {
        gameCanvas.clearRect(0, 0, gameCanvasIn.width, gameCanvasIn.height);
        drawShip(shipxy);
        drawFire(fireArr);
    }
}