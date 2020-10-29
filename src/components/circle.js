// import using require
// declare class
//export class using module.exports
//import Shape from './shape';
const Shape=require('./shape.js');
class Circle extends Shape
{
    constructor()
    {
        super();
    }
    calculateArea()
    {
        console.log("Area with color:"+this.color);
        return 3.14*5*5;
    }
}
module.exports=Circle;