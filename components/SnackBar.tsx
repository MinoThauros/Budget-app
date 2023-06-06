import { Snackbar, Button } from "@react-native-material/core";
import { View, Text } from 'react-native'
import {useContext, useState} from 'react'
import { SnackBarContext } from "../states/context/SnackBarContext";

export type SnackBarProps={
    condition:boolean;
    message?:string;
    buttonTitle?:string;
}
const SnackBar = () => {
    const {SnackBar:SnackBarCtx,resetSnackBar}=useContext(SnackBarContext)
    if (!SnackBarCtx?.condition){
        return <></>
    }
    return (
    <View>
        <Snackbar
        message={SnackBarCtx.message??"An error occured"}
        action={<Button variant="text" title="Dismiss" color="#BB86FC" compact onPress={()=>resetSnackBar()}/>}
        style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
        />
    </View>
    )
}

export default SnackBar