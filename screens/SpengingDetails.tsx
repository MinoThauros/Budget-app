import { View, Button,Text } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { spending } from '../models/spending';
import Spending from "../components/Spending";
import { DeleteSpending,EditSpending } from "../states/redux/expenses";
import { useState, useEffect } from 'react';
import { HTTPInterface } from "../functions/http";


const {deleteExpense}=new HTTPInterface()

const SpendingDetailsComponent=({navigation,route}:any)=>{
    //handle deletion of spending; keep the deletion function here
    const dispatch=useDispatch();
    const [change,setChange]=useState(false);
    const spending=route.params.Spending;
    
        
    const deleteSpending=async ()=>{
        dispatch(DeleteSpending({element:spending}))
        deleteExpense(spending.id)
        navigation.goBack()
    };

    useEffect(()=>{
        setChange(true)
    },[spending])

    const editSpending=(newSpending:spending)=>{
        dispatch(EditSpending({element:spending,newElement:newSpending}))
    }

    const Content=()=>{
        var Details:JSX.Element=(
        <View>
            <Spending spending={spending} Delete={deleteSpending} Edit={()=>{}}/>
        </View>
            
        )
        if (!spending){//think about this
            Details=(
                <View style={{flex:1}}>
                    <Text>Deleted Spending</Text>
                </View>
            )
        }
        return Details
    }
    
    return (
        <View >
            <Content/>
        </View>
        
    )

};



export default SpendingDetailsComponent;