import { Text, View, StyleSheet, Modal, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { OverlayContext } from '../states/context/InputOverlayContext';
import { useContext } from "react";
import { spending } from '../models/spending';
import { useSelector,useDispatch } from "react-redux";
import { AddSpending} from '../states/redux/expenses';
import { Validator } from '../functions/validator';


const SpendingInput=()=>{
    const Overlay=useContext(OverlayContext);
    const visible:boolean=Overlay.visible;
    const pressed=()=>{
      Overlay.toogleOverlay();};

  const dispatch=useDispatch();

  const addSpending=(newSpending:spending)=>{
    dispatch(AddSpending({element:newSpending}))
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
        amountWarning:<Text>Invalid amount</Text>,
        categoryWarning:<Text>Invalid Category</Text>,
        dateWarning:<Text>Invalid date</Text>,
        titleWarning:<Text>Invalid title</Text>

    }
    
    //use this state to show warnings
    
    const submitButton=()=>{
        //check validation states here

        const {wordValidator,numValidator}=new Validator()

        if (numValidator(amount) && wordValidator(category) &&  wordValidator(date) &&  wordValidator(title)){
            console.log('all good')
            //infinite loop
            let enteredData:spending=new spending(amount,category,date,title)
            addSpending(enteredData)
            //addSpending(enteredData)
            pressed()
        }
        else{
            console.log('someone isnt reglo')
            setWarnings(messages)
        }
    } 
    return (
        <View style={styles.overallContainer}>
            <View>
                <View>
                    {warnings.titleWarning}
                    <Text style={styles.titles}>Title: </Text>
                    <TextInput 
                        style={styles.textInputA}
                        onChangeText={newText=>setTitle(newText)}
                        defaultValue={title}/>
                </View>
                <View>
                {warnings.amountWarning}
                    <Text style={styles.titles}>Amount: </Text>
                    <TextInput 
                        style={styles.textInputA}
                        onChangeText={newText=>setAmount(+newText)}
                        defaultValue={amount.toString()}
                        keyboardType='numeric'
                        placeholder=''
                        />
                </View>
                <View>
                {warnings.categoryWarning}
                    <Text style={styles.titles}>Category: </Text>
                    <TextInput
                        onChangeText={setCategory} 
                        style={styles.textInputA}
                        value={category}/>
                </View>
                <View>
                {warnings.dateWarning}
                    <Text style={styles.titles}>Date: </Text>
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
    }
})