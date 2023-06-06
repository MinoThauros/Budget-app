//returns a string witch translates error codes to snack bar messages
const ProcessError = (response: any) => {
    if(response.data.error){
        console.log(response.data.error.message,response.data.error.code)
        return response.data.error.message
    }

}