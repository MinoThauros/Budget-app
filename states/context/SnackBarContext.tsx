import { createContext, useState } from "react";
import SnackBar, { SnackBarProps } from '../../components/SnackBar';

export const SnackBarContext=createContext({
    SnackBar:{
        condition:false as boolean,
        message:"" as string,
    } as SnackBarProps | null,
    setSnackBar:({message}:{message:string}):void=>{},
    resetSnackBar:():void=>{},
})

export const SnackBarContextProvider=({children}:any):JSX.Element=>{
    const [SnackBar,setSnackBar]=useState(null as SnackBarProps | null);

    const resetSnackBar=()=>{
        setSnackBar(null)
    }

    const setSnackBarMessage=({message}:{message:string}):void=>{
        setSnackBar({
            condition:true,
            message,
        })
    }

    const context={
        SnackBar,
        setSnackBar:setSnackBarMessage,
        resetSnackBar,
    }
    return <SnackBarContext.Provider value={context}>{children}</SnackBarContext.Provider>
}