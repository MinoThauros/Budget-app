import axios from 'axios'
import { spending } from '../models/spending';

/*
Firebase rules have to be:

{
  "rules": {
    ".read": true,
    ".write": true,
  }
}

*/

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
            //need to handle promise rejection here

            for ( let key in data){
                const expenseObj:spending={
                    id:key,//firebase id
                    price:data[key].price,
                    date:data[key].date,
                    category:data[key].category,
                    title:data[key].title
                };
                expenses.push(expenseObj);
            }
            //console.log('expenses are',[...expenses])
            
        }
        catch(err:any){
            //console.log(err.toJson())
            console.log('error in getExpenses',{...err})
            return err 
            
        }
        return expenses.reverse() //return either em

    };

    async deleteExpense(id:string) {
        try{
            const response=await axios.delete('https://bgetapp-default-rtdb.firebaseio.com/expenses'+`/${id}.json`)
            return response

        }
        catch(err){
            console.log(err)
            return err

        }
        
    }

    async updateExpense({id,updatedExpense}:{id:string,updatedExpense:spending}){
        try{
            const response=await axios.put('https://bgetapp-default-rtdb.firebaseio.com/expenses'+`/${id}.json`,updatedExpense)
            return response
        }catch(err){
            console.log(err)
            return err
        }
    }
}

export class AuthInterface{
    private readonly  API_KEY:string=process.env.REACT_APP_FIREBASE_API_KEY as string;
    readonly generateUrl=({mode}:{mode:'login'|'signup'})=>{
        return `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${this.API_KEY}`
    }
    async login({email,password}:{email:string,password:string}){
        const response=await axios.post(this.generateUrl({mode:'login'}),{
            email,
            password,
            returnSecureToken:true
            //ask backend to return token; if token is returned, we know that the login was successful
        })
        return response.data
    }

    async signup({email,password}:{email:string,password:string}){
        const response=await axios.post(this.generateUrl({mode:'signup'}),{
            email,
            password,
            returnSecureToken:true
        })
        return response.data
        //
    }

}