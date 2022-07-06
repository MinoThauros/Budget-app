import { View, StyleSheet,Pressable } from "react-native";
import {Ionicons} from '@expo/vector-icons';

export const HeaderButton=({size}:any):JSX.Element=>{

    return(
        <Pressable style={({pressed})=>(pressed ? styles.pressed:null)}>
              <View style={styles.container}>
        <View style={styles.iconTainer}>
            <Ionicons name="add" size={size}/>
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

