function Bubble(divName, x,y,size)
{
   this.x = x;
   this.y = y;
   this.size = size;
   this.speed = (Math.random()*20)+1;
   this.divName = divName;
   this.getXString = function()
   {
       return this.x+"px";
   }
   this.getYString = function()
   {
       return this.y+"px";
   }
   this.getSizeString = function()
   {
       return this.size+"px";
   }
   this.float = function()
   {
       this.y-=this.speed;
   }
   this.sink = function() {
       this.y+=this.speed;
   }
}