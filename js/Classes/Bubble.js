function Bubble(x,y,size)
{
   this.x = x;
   this.y = y;
   this.size = size;
   this.speed = (Math.random()*10)+1;
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
}