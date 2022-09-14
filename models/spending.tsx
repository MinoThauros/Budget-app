export enum spendingsTypes {
    id,
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
    readonly id?:string;
    readonly title:string;
    readonly price:any;
    readonly category:string;
    readonly date:string;

    
    constructor(
        price:any,
        category:string,
        date:string,
        title:string,
    ){

        this.price=price;
        this.category=category
        this.date=date
        this.title=title
    }

}//only way to change the propriety of a spending is through constructor


/**To-do:
 * -> create enum so that the 
 */