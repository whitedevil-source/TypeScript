import {BaseModel} from "./baseModel";

export class Movie extends BaseModel  //Named Export
{
    constructor(name="", producer="", rating=0)
    {
        super();

        this.name=name;
        this.producer=producer;
        this.rating=rating;
        
    }
}