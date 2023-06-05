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
export const Categories:['Food','Clothes','Housing','Transportation','Utilities','Insurance','Health','Personal']=[
    'Food','Clothes','Housing','Transportation','Utilities','Insurance','Health','Personal'
]

export class spending {
    readonly id?:string;
    readonly title:string;
    readonly price:number;
    readonly category: typeof Categories[number];
    readonly date:string;

    
    constructor(
        price:number,
        category: typeof Categories[number],
        date:string,
        title:string,
    ){

        this.price=price;
        this.category=category
        this.date=date
        this.title=title
    }

}
