import { View, Text, Button, Modal, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'
import { Validator } from '../API/validator';
import { spending } from '../models/spending';

type SpendingCardProps={
    initialValues?:spending,
    confirm?:({data,id}:{data:spending,id?:string})=>void,
    optionalButton?:()=>void,
    id?:string

}


const SpendingCard = ({initialValues,confirm,optionalButton,id}:SpendingCardProps) => {

  
    const {wordValidator,numValidator}=new Validator()

    const ValidativeForm=():JSX.Element=>{
        const [amount,setAmount]=useState(initialValues?.price??Number);
        const [category,setCategory]=useState(initialValues?.category??'');
        const [date, setDate]=useState(initialValues?.date??'');
        const [title,setTitle]=useState(initialValues?.title??'');

        const [warnings,setWarnings]=useState({
            amountWarning:<></>,
            categoryWarning:<></>,
            dateWarning:<></>,
            titleWarning:<></>
        })

        const messages={
            amountWarning: !numValidator(amount)? <Text style={styles.validationError}>Invalid amount</Text>:<></>,
            categoryWarning:!wordValidator(category)?<Text style={styles.validationError}>Invalid Category</Text>:<></>,
            dateWarning:!wordValidator(date)?<Text style={styles.validationError}>Invalid date</Text>:<></>,
            titleWarning:!wordValidator(title)?<Text style={styles.validationError}>Invalid title</Text>:<></>
        }
        
        
        const submitButton=()=>{

            if (numValidator(amount) && wordValidator(category) &&  wordValidator(date) &&  wordValidator(title)){
                let enteredData:spending=new spending(amount,category,date,title)
                confirm ? confirm({data:enteredData,id}):null
            }
            else{
                setWarnings(messages)
            }
        } 
        return (
            <View style={styles.overallContainer}>
                <View>
                    <View>
                        <Text style={styles.titles}>Title: </Text>
                        {warnings.titleWarning}
                        <TextInput 
                            style={styles.textInputA}
                            onChangeText={setTitle}
                            defaultValue={initialValues?.title}/>
                    </View>
                    <View>
                        <Text style={styles.titles}>Amount: </Text>
                        {warnings.amountWarning}
                        <TextInput 
                            style={styles.textInputA}
                            onChangeText={newText=>setAmount(parseInt(newText))}
                            value={amount.toString()}
                            keyboardType='numeric'
                            defaultValue={initialValues?.price??''}
                            />
                    </View>
                    <View>
                        <Text style={styles.titles}>Category: </Text>
                        {warnings.categoryWarning}
                        <TextInput
                            onChangeText={setCategory} 
                            style={styles.textInputA}
                            value={category}
                            defaultValue={initialValues?.category??''}
                            />
                    </View>
                    <View>
                        <Text style={styles.titles}>Date: </Text>
                        {warnings.dateWarning}
                        <TextInput
                            onChangeText={setDate}
                            style={styles.textInputA}
                            value={date}
                            autoCorrect={false}
                            defaultValue={initialValues?.date??''}
                            />
                    </View>
                    <View style={styles.buttonStack}>
                        <Button title='Go back' onPress={optionalButton}/>
                        <Button title="Submit" onPress={submitButton}/>
                    </View>
                </View>
            </View>)
        
        };


    return (

        <View style={styles.overallView}>
            <ValidativeForm/>
        </View>
    )
}

export default SpendingCard;

const styles=StyleSheet.create({
    overallView:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent:'center',
        alignItems:'center',
    },
    overallContainer:{
        backgroundColor:"#521e87",
        borderRadius:18,
        padding:10,
        margin:20,
        width:'75%',
        justifyContent:'center'
    },

    textInputA:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'white',
        borderRadius:8
    },
    titles:{
        fontWeight:'bold',
        color:'white'
    },

    buttonStack:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    validationError:{
        fontSize:12,
        color:'red'

    }
})