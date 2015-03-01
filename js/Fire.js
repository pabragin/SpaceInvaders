function Fire(startX, startY)
{
    var x=startX;
    var y=startY;
    var index=0;

    this.getX = function()
    {
        return x;
    }
    this.getY = function()
    {
        return y;
    }
    this.getXY = function()
    {
        return [x,y];
    }
    this.getIndex = function()
    {
        return index;
    }
    this.moveShipFire = function()
    {
        if(y>-1)
        {
            y--;
        }
    }
    this.setIndex =function(id)
    {
        index=id;
    }
    this.moveOpositeFire = function()
    {
        if(y>-1)
        {
            y--;
        }
    }
}

function FireArray()
{
    var fireArr = new Array();
    this.add = function(fire)
    {
        fireArr.push(fire);
        var shipFireId = setInterval(function(){fire.moveShipFire();}, 1000/30);
        fire.setIndex(shipFireId);
    }
    this.getAllFire = function()
    {
        return fireArr;
    }
    this.getAsArray = function()
    {
        var arr=new Array();
        for(var i=0;i<fireArr.length;i++)
        {
            arr.push(fireArr[i].getXY());
        }
        return arr;
    }
    this.moveShipFire = function()
    {
        for(var i=0;i<fireArr.length;i++)
        {
            fireArr[i].moveShipFire();
            if(fireArr[i].getY()==0)
            {
                clearInterval(fireArr[i].getIndex());
                fireArr.splice(i, 1);
            }
        }
    }
}
