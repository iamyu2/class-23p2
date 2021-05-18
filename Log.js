class Log
{

    constructor(speed)
    {

        this.x = random([100, 300, 500, 700, 900]);
        this.y = height-random([550, 650, 750, 1350, 1450, 1550]);
        this.width = 1500;
        this.height = 800;
        this.speed = speed;
        this.spt = createSprite(this.x, this.y, this.width, this.height);
        this.spt.velocityX = this.speed;
        this.spt.shapeColor = "brown";
        var s = Math.round(random(1,2))
        if(s == 1)
        {

            this.spt.addImage(logImage1);

        }
        if(s == 2)
        {

            this.spt.addImage(logImage2);
            
        }
        this.spt.scale = 0.08;

    }

}
