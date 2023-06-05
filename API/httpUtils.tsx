// Request Payload Type
export type AuthRequestPayloadArgs={
    email: string;
    password: string;
    returnSecureToken: boolean;
  }
  
  // Response Payload Type
export type SignUpResponsePayload={
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}
  

// Response Payload Type
export type SignInResponsePayload=SignUpResponsePayload & {
    registered: boolean;
}

/**
 * Returns a promise based on the http headers of the API reqest
 * Use to trigger a catch block if the response is not 200
 * @param callback 
 */
export const CallBackWrapper= async (callbackFn:Function)=>{
    //the problem is that axios doen't catch server errors 
    const {status}= await callbackFn()
    return new Promise((resolve,reject)=>{
        if(status===200){
            resolve(status)
        }
        reject(status)
    })

}