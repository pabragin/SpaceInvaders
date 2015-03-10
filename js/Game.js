/*global Gamefield, Ship, Fire, Enemy*/
/*jslint plusplus: true*/
function Game(gameCanvas) {//game constructor
    "use strict";
    var gameField = new Gamefield(gameCanvas),
        ship = new Ship((gameCanvas.width / 2), gameCanvas.height - 24),
        fireArr = [],
        enemyArr = [],
        config = {
            fps: 30,
            fireSpeed: 3,
            fireDelay: 500,
            shipStep: 5,
            enemySpeed: 1
        };

    this.moveShipLeft = function () {
        ship.move(ship.getX() - config.shipStep, ship.getY());
    };

    this.moveShipRight = function () {
        ship.move(ship.getX() + config.shipStep, ship.getY());
    };

    function shipFire() {
        var newFire = new Fire(ship.getX(), ship.getY() - (ship.getSizeY() / 2), config.fireSpeed);
        fireArr.push(newFire);
    }

    function fireReachGoal(fire) {
        var i;
        for (i = 0; i < enemyArr.length; i++) {
            if (
                (fire.getX() > (enemyArr[i].getX() - (enemyArr[i].getSizeX() / 2))) &&
                    (fire.getX() < (enemyArr[i].getX() + (enemyArr[i].getSizeX() / 2)))
            ) {
                if ((fire.getY() < enemyArr[i].getY() + (enemyArr[i].getSizeY() / 2))) {
                    return i;
                }
            }
        }
        return -1;
    }

    function moveAllFires() {
        var i, numOfEnemy;
        for (i = 0; i < fireArr.length; i++) {
            fireArr[i].moveShipFire();
            numOfEnemy = fireReachGoal(fireArr[i]);
            if (numOfEnemy > -1) {
                fireArr[i].setBang();
                enemyArr[numOfEnemy].setBang();
            }
            if (fireArr[i].isBang() || fireArr[i].isOut()) {
                fireArr.splice(i, 1);
            }
        }
    }

    function generateNewEnemy(posX, posY) {
        var newEnemy = new Enemy(posX, posY, config.enemySpeed);
        enemyArr.push(newEnemy);
    }

    function moveAllEnemy() {
        var i;
        for (i = 0; i < enemyArr.length; i++) {
            enemyArr[i].step();
            if (enemyArr[i].getY() > (gameCanvas.height - (enemyArr[i].getSizeY() / 2))) {//enemy is out from view
                enemyArr[i].setOut();
            }
            if (enemyArr[i].isBang() || enemyArr[i].isOut()) {
                enemyArr.splice(i, 1);
            }
        }
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.start = function () {//start main loop
        setInterval(function () {gameField.redraw(ship, fireArr, enemyArr); }, 1000 / config.fps);
        setInterval(function () {moveAllFires(); }, 1000 / config.fps);
        setInterval(function () {moveAllEnemy(); }, 1000 / config.fps);
        setInterval(function () {shipFire(); }, config.fireDelay);
        setInterval(function () {generateNewEnemy(getRandomInt(0, gameCanvas.width), 0); }, 1000);
    };
}