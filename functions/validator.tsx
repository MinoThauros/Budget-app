//creating a validator which takes in an array

export class Validator{
    readonly specialChars =/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
    wordValidator=(word:string):boolean=>{
        var status:boolean=false;
        if (word.trim().length!==0 && !this.specialChars.test(word)){//as soon as there is a special character
            status=true;
        }
        return status
    };

    numValidator=(num:number)=>{
        var status:boolean=false;
        if (!isNaN(num) && num!=0){
            status=true
        }
        return status
    }


}