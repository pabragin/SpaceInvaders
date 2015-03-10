/*jslint plusplus: true*/
function Gamefield(gameCanvasIn) {//game field constructor
    "use strict";
    var gameCanvas = gameCanvasIn.getContext("2d"),
        enemyImg = new Image(),
        shipImg = new Image();
    gameCanvas.scale(1, 1);
    enemyImg.src = 'img/Enemy7.png';
    shipImg.src = 'img/Ship2.svg';

    function drawShip(ship) {//draw ship on game field
        gameCanvas.drawImage(shipImg, ship.getX() - ship.getSizeX() / 2, ship.getY(), ship.getSizeX(), ship.getSizeY());
    }

    function drawFire(fireArr) {//draw ship on game field
        var i;
        gameCanvas.fillStyle = "red";
        for (i = 0; i < fireArr.length; i++) {
            gameCanvas.fillRect(fireArr[i].getX(), fireArr[i].getY(), 1, 10);
        }
    }

    function drawEnemy(enemyArr) {//draw enemy on game field
        var i;
        for (i = 0; i < enemyArr.length; i++) {
            gameCanvas.drawImage(enemyImg, enemyArr[i].getX() - enemyArr[i].getSizeX() / 2, enemyArr[i].getY(), enemyArr[i].getSizeX(), enemyArr[i].getSizeY());
        }
    }

    this.redraw = function (ship, fireArr, enemyArr) {//redraw game field
        gameCanvas.clearRect(0, 0, gameCanvasIn.width, gameCanvasIn.height);
		gameCanvas.fillStyle = "black";
		gameCanvas.fillRect(0, 0, gameCanvasIn.width, gameCanvasIn.height);
        drawShip(ship);
        drawFire(fireArr);
        drawEnemy(enemyArr);
    };
}