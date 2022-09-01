import axios from 'axios'
import { spending } from '../models/spending';

export class HTTPInterface{
    readonly rootApi='https://bgetapp-default-rtdb.firebaseio.com/';
    readonly expenseNode='expenses.json';

    storeExpense(spending:spending){
        axios.post(this.rootApi+this.expenseNode,spending)//
    };
    async getExpenses(){
        const response= await axios.get(this.rootApi+this.expenseNode);

        const expenses=[] as spending[]

        for ( const key in response.data){
            const expenseObj:spending={
                id:key,
                price:response.data[key].amount,
                date:response.data[key].date,
                category:response.data[key].category,
                title:response.data[key].title
            };
            expenses.unshift(expenseObj);
        }
        return expenses

    }

}