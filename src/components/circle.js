// import using require
// declare class

const { default: Shape } = require("./shape");

// export class using module.exports
import Shape from './shape';
//let Persion=require('./shape.js');
export default class Circle extends Shape
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