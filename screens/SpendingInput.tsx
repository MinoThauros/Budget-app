import { Text, View, StyleSheet, Modal, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { OverlayContext } from '../states/context/InputOverlayContext';
import { useContext } from "react";
import { spending } from '../models/spending';
import { useSelector,useDispatch } from "react-redux";
import { AddSpending} from '../states/redux/expenses';
import { Validator } from '../API/validator';
import { HTTPInterface } from '../API/http';

const {storeExpense}=new HTTPInterface()

const SpendingInput=()=>{
    const {wordValidator,numValidator}=new Validator()
    const Overlay=useContext(OverlayContext);
    const visible:boolean=Overlay.visible;
    const pressed=()=>{
      Overlay.toogleOverlay();};

  const dispatch=useDispatch();

  const addSpending=async (newSpending:spending)=>{
    const responseID:string=await storeExpense(newSpending)
    //add spinner here as we're waiting for async operation to finish
    dispatch(AddSpending({element:{...newSpending,id:responseID}}))
    
  };
 
  const SpendingCard=({onPress}:any):JSX.Element=>{
    const [amount,setAmount]=useState(Number);
    const [category,setCategory]=useState('');
    const [date, setDate]=useState('');
    const [title,setTitle]=useState('');

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
            addSpending(enteredData)
            pressed()
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
                        onChangeText={newText=>setTitle(newText)}
                        defaultValue={title}/>
                </View>
                <View>
                    <Text style={styles.titles}>Amount: </Text>
                    {warnings.amountWarning}
                    <TextInput 
                        style={styles.textInputA}
                        onChangeText={newText=>setAmount(+newText)}
                        value={amount.toString()}
                        keyboardType='numeric'
                        defaultValue=''
                        />
                </View>
                <View>
                    <Text style={styles.titles}>Category: </Text>
                    {warnings.categoryWarning}
                    <TextInput
                        onChangeText={setCategory} 
                        style={styles.textInputA}
                        value={category}/>
                </View>
                <View>
                    <Text style={styles.titles}>Date: </Text>
                    {warnings.dateWarning}
                    <TextInput
                        onChangeText={setDate}
                        style={styles.textInputA}
                        value={date}
                        autoCorrect={false}
                        />
                </View>
                <View style={styles.buttonStack}>
                    <Button title='Go back' onPress={onPress}/>
                    <Button title="Submit" onPress={submitButton}/>
                </View>
            </View>
        </View>)
     
    };
    


    return (
        <Modal 
            
            style={styles.overallView} 
            visible={visible} 
            animationType={'fade'}
            transparent={true}
            >
            <View style={styles.overallView}>
                <SpendingCard onPress={pressed}/>
            </View>

        </Modal>
        
    )
}

export default SpendingInput;

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