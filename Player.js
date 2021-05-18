class Player 
{

  constructor(px, py)
  {

    this.x = px;
    this.y = py;
    this.spt = createSprite(this.x, this.y, 50, 50);
    this.spt.addImage(playerImage);
    this.spt.scale = 0.05;

  }

  move(xdir, ydir)
  {
    
    this.spt.x = this.spt.x + xdir;
    this.spt.y = this.spt.y + ydir;
    
  }

}