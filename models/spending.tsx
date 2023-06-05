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
    readonly price:number;
    readonly category:string;
    readonly date:string;

    
    constructor(
        price:number,
        category:string,
        date:string,
        title:string,
    ){

        this.price=price;
        this.category=category
        this.date=date
        this.title=title
    }

}
export const Categories:['Food','Clothes','Housing','Transportation','Utilities','Insurance','Health','Personal']=[
    'Food','Clothes','Housing','Transportation','Utilities','Insurance','Health','Personal'
]