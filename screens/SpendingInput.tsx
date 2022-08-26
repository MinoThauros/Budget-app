import { Text, View, StyleSheet, Modal, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { OverlayContext } from '../states/context/InputOverlayContext';
import { useContext } from "react";
import { spending } from '../models/spending';
import { useSelector,useDispatch } from "react-redux";
import { AddSpending} from '../states/redux/expenses';


const SpendingInput=()=>{
    //const [overlayVisibility,setOverlayVisiblity]=useState(true as boolean);
    //lets hook the visibility of the modal to the global context
    const Overlay=useContext(OverlayContext);
    const visible:boolean=Overlay.visible;//binding the state to local variables
    const pressed=()=>{
      Overlay.toogleOverlay();};
  //this context needs to work in tandem with add button

  //fecthing the state
  const dispatch=useDispatch();

  const addSpending=(newSpending:spending)=>{
    dispatch(AddSpending({element:newSpending}))
  };

  const validator=()=>{}//write the validator here



  
    
  const SpendingCard=({onPress}:any):JSX.Element=>{
    const [amount,setAmount]=useState('');
    const [category,setCategory]=useState('');
    const [date, setDate]=useState('');
    const [title,setTitle]=useState('');

    //keyboard was dismissed everytime due to state change
    //we only allow the function to rerender so keyboard doesnt get dismissed
    //so keeping the states local
    
    const submitButton=()=>{
        //check validation states here

        if (amount.trim().length!==0 && category.trim().length!==0 &&  date.trim().length!==0 &&  title.trim().length!==0){
            console.log('all good')
            //infinite loop
            let enteredData:spending=new spending(amount,category,date,title)
            addSpending(enteredData)
            //addSpending(enteredData)
            pressed()
        }
        else{
            console.log('someone isnt reglo')
        }
    } 
    return (
        <View style={styles.overallContainer}>
            <View>
                <View>
                    <Text style={styles.titles}>Title: </Text>
                    <TextInput 
                        style={styles.textInputA}
                        onChangeText={newText=>setTitle(newText)}
                        defaultValue={title}/>
                </View>
                <View>
                    <Text style={styles.titles}>Amount: </Text>
                    <TextInput 
                        style={styles.textInputA}
                        onChangeText={newText=>setAmount(newText)}
                        defaultValue={amount}
                        keyboardType='numeric'/>
                </View>
                <View>
                    <Text style={styles.titles}>Category: </Text>
                    <TextInput
                        onChangeText={setCategory} 
                        style={styles.textInputA}
                        value={category}/>
                </View>
                <View>
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
        height:'50%',
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