import axios from 'axios'
import { spending } from '../models/spending';

export class HTTPInterface{
    readonly rootApi:string='https://bgetapp-default-rtdb.firebaseio.com/';
    readonly expenseNode:string='expenses.json';
    readonly url:string='https://bgetapp-default-rtdb.firebaseio.com/expenses.json';

    async storeExpense(spending:spending){
        const response=await axios.post('https://bgetapp-default-rtdb.firebaseio.com/expenses.json',spending)
        return response.data.name;
    };
    async getExpenses():Promise<spending[]>{
        const expenses=[] as spending[]
        try {

            let { data } = await axios.get('https://bgetapp-default-rtdb.firebaseio.com/expenses.json');

            for ( const key in data){
                const expenseObj:spending={
                    id:key,
                    price:data[key].price,
                    date:data[key].date,
                    category:data[key].category,
                    title:data[key].title
                };
                expenses.push(expenseObj);
            }
            
        }
        catch(err){
            console.log(err)
        }
        return expenses.reverse()

    };

    async deleteExpense(id:string) {
        try{
            const response=await axios.delete('https://bgetapp-default-rtdb.firebaseio.com/expenses'+`/${id}.json`)
            return response

        }
        catch(err){
            console.log(err)

        }
        
    }

}