// import using require
// declare class
//export class using module.exports
//import Shape from './shape';
let Shape=require('./shape.js');
module.exports=class Circle extends Shape
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