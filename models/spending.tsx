export enum spendings {
    Food,
    Clothes,
    housing,
    Transportation,
    Utilities,
    Insurance,
    Health,
    Personal,

}

export class spending {
    readonly title:string;
    readonly price:Number;
    readonly category:string;
    readonly date:string;
    
    constructor(
        title:string,
        price:Number,
        category:string,
        date:string
    ){
        this.title=title;
        this.price=price;
        this.category=category
        this.date=date
    }

}//only way to change the propriety of a spending is through constructor


/**To-do:
 * -> create enum so that the 
 */