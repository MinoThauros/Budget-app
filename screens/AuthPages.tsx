import { View, Text, StyleSheet } from 'react-native'
import CustomTextInput from '../components/CustomTextInput'
import { useState } from 'react'
import { Button } from '@react-native-material/core'
import LoginPage from './LoginPage'
import SignupPage from './SingUpPage'
import Colors from '../constants/colors'

export type AuthPagesProps={
    setLogin:(value: React.SetStateAction<boolean>) => void,
}

//conditionally displays the login or signup page
const AuthPages = () => {
    const [login,setLogin]=useState(true)
        return(
            <View style={styles.overallView}>
                {login && <LoginPage setLogin={setLogin}/>}
                {!login && <SignupPage setLogin={setLogin}/>}
            </View>
        )};

export default AuthPages

const styles = StyleSheet.create({
    overallView:{
        flex:1,
        justifyContent:'center',
        width:'100%',
        backgroundColor:Colors.Slate_blue,
        padding:10,
    },
})