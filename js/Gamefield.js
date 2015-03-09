function Gamefield(gameCanvasIn)//game field constructor
{
    var gameCanvas = gameCanvasIn.getContext("2d");
    gameCanvas.scale(1,1);
    var enemyImg=new Image();
    var shipImg=new Image();
    enemyImg.src='img/Enemy.svg';
    shipImg.src='img/Ship.svg';

    var drawShip = function (ship)//draw ship on game field
    {
        gameCanvas.drawImage(shipImg,ship.getX()-ship.getSizeX()/2, ship.getY(), ship.getSizeX(), ship.getSizeY());
    };

    var drawFire = function (fireArr)//draw ship on game field
    {
        gameCanvas.fillStyle = "red";
        for(var i=0; i<fireArr.length;i++) {
            gameCanvas.fillRect(fireArr[i].getX(), fireArr[i].getY(), 1, 10);
        }
    };

    var drawEnemy = function (enemyArr)//draw enemy on game field
    {
        for(var i=0; i<enemyArr.length;i++) {
            gameCanvas.drawImage(enemyImg,enemyArr[i].getX()-enemyArr[i].getSizeX()/2, enemyArr[i].getY(), enemyArr[i].getSizeX(), enemyArr[i].getSizeY());
        }
    };

    this.redraw = function (ship, fireArr, enemyArr)//redraw game field
    {
        gameCanvas.clearRect(0, 0, gameCanvasIn.width, gameCanvasIn.height);
        drawShip(ship);
        drawFire(fireArr);
        drawEnemy(enemyArr);
    };
}