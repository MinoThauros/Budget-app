import axios, { AxiosError, AxiosResponse } from 'axios'
import { spending } from '../models/spending';
import {AuthRequestPayloadArgs,SignUpResponsePayload,SignInResponsePayload} from './httpUtils'

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
    async getExpenses(){
        const expenses=[] as spending[]

        const response =await await axios.get('https://bgetapp-default-rtdb.firebaseio.com/expenses.json');
        return new Promise((resolve,reject)=>{
            if(response.status===200){
                const {data}=response
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

                resolve(expenses as spending[])
            }else{
                reject(response as  AxiosResponse<any, any>)
            }
        })
    
    };

    async deleteExpense(id:string) {
        return await axios.delete('https://bgetapp-default-rtdb.firebaseio.com/expenses'+`/${id}.json`)
        
    }

    async updateExpense({id,updatedExpense}:{id:string,updatedExpense:spending}){
        return await axios.put('https://bgetapp-default-rtdb.firebaseio.com/expenses'+`/${id}.json`,updatedExpense)
    }

    getBudget=async ()=>{
        try{
            const response=await axios.get('https://bgetapp-default-rtdb.firebaseio.com/budget.json')
            return response
        }catch(err){
            console.log(err)
            return err
        }
    }

    updateBudget=async (newBudget:spending)=>{
        try{
            const response=await axios.put('https://bgetapp-default-rtdb.firebaseio.com/budget.json',newBudget)
            return response
        }catch(err){
            console.log(err)
            return err
        }

    }
}

export class AuthInterface{
    private readonly  API_KEY:string='AIzaSyDWZcx9JHwZSj2fam2grs4bAL0reJBuIzE';
    private readonly  generateUrl=({mode}:{mode:'signInWithPassword'|'signUp'})=>{
        return `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${this.API_KEY}`

    }
    login=async ({email,password}:{email:string,password:string}):Promise<AxiosResponse<SignInResponsePayload, AxiosError>> =>{

        return await axios.post(this.generateUrl({mode: 'signInWithPassword'}),{
            email,
            password,
            returnSecureToken:true
            //ask backend to return token; if token is returned, we know that the login was successful
            }as AuthRequestPayloadArgs)
        

        
        
    }

    signup=async ({email,password}:{email:string,password:string})=>{
        return await axios.post(this.generateUrl({mode:'signUp'}),{
            email,
            password,
            returnSecureToken:true
            //ask backend to return token; if token is returned, we know that the login was successful
            }as AuthRequestPayloadArgs)
            
    }



}