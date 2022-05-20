import { Category } from "./category.model";

export class Quiz{
    id?:number;
    title:string='';
    description:string='';
    maxMarks:string='';
    numberOfQuestions:string='';
    enabled:number=1;
    category:Category;

    constructor(){
        this.category=new Category();
    }    
    
}