import { View, StyleSheet,Pressable } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { useContext } from "react";
import { OverlayContext } from '../states/context/InputOverlayContext';
import Colors from "../constants/colors";

export const HeaderButton=({size}:any):JSX.Element=>{

    const overlay=useContext(OverlayContext);
    const toggle=overlay.visible;

    const pressed=()=>{
        overlay.toogleOverlay();
    }

    return(
        <Pressable style={({pressed})=>(pressed ? styles.pressed:null)} onPress={pressed}>
              <View style={styles.container}>
        <View style={styles.iconTainer}>
            <Ionicons name="add-circle-outline" size={size} color={Colors.Tangerine}/>
        </View>
        
    </View>  
        </Pressable>
)
};

const styles = StyleSheet.create({
    container: {
    },

    iconTainer:{
        flex:1
    },
    pressed:{
        opacity:0.5
    },
  });

