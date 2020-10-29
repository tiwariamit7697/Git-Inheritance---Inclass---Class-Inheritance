// declare class
// export class using module.exports
class Shape
{
    constructor()
    {
        this.color="red";
    }
    drawShape()
    {
        console.log("draw any shape");
    }
    calculateArea()
    {
        console.log("unknown area");
        return 0;
    }
}
module.exports=Shape;