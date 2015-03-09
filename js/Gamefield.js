function Gamefield(gameCanvasIn)//game field constructor
{
    var gameCanvas = gameCanvasIn.getContext("2d");

    var drawShip = function (xy)//draw ship on game field
    {
        gameCanvas.fillStyle = "black";
        gameCanvas.fillRect(xy[0]-5, xy[1], 10, 8);
    };

    var drawFire = function (fireArr)//draw ship on game field
    {
        gameCanvas.fillStyle = "red";
        for(var i=0; i<fireArr.length;i++) {
            gameCanvas.fillRect(fireArr[i].getX(), fireArr[i].getY(), 1, 4);
        }
    };

    var drawEnemy = function (enemyArr)//draw enemy on game field
    {
        gameCanvas.fillStyle = "blue";
        for(var i=0; i<enemyArr.length;i++) {
            gameCanvas.fillRect(enemyArr[i].getX()-enemyArr[i].getSizeX()/2, enemyArr[i].getY(), enemyArr[i].getSizeX(), enemyArr[i].getSizeY());
        }
    };

    this.redraw = function (shipxy, fireArr, enemyArr)//redraw game field
    {
        gameCanvas.clearRect(0, 0, gameCanvasIn.width, gameCanvasIn.height);
        drawShip(shipxy);
        drawFire(fireArr);
        drawEnemy(enemyArr);
    };
}