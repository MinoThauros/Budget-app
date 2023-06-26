import { createContext, useState } from "react";

export const AuthContext=createContext({
    token:null as string | null,
    logout:():void=>{},//to set the token to null
    isAuthenticated:false as boolean,
    authenticate:({token}:{token:string}):void=>{},//to set the token to a value
})

export const AuthContextProvider=({children}:any):JSX.Element=>{
    const [token,setToken]=useState(null as string | null);
    const [isAuthenticated,setIsAuthenticated]=useState(false as boolean);

    const Logout=():void=>{
        setToken(null);
        setIsAuthenticated(!!token)//!!converts to boolean
    }

    const Authenticate=({token}:{token:string}):void=>{
        console.log('authenticating with',token,'in context')
        setToken(token);
        setIsAuthenticated(!!token)
        

    }

    const context={
        token,
        isAuthenticated,
        logout:Logout,
        authenticate:Authenticate,
    }
    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}