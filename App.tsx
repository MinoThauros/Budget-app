import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Alert, Button, SafeAreaView, ToastAndroid, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/AllExpensesScreen';
import RecentExpenses from './screens/RecentExpensesScreen';
import Profile from './screens/profile';
import {Ionicons} from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store } from './states/redux/store';
import {HeaderButton} from './components/headerAddButton';
import OverlayToggleContextProvider from './states/context/InputOverlayContext';
import { useContext } from "react";
import { OverlayContext } from './states/context/InputOverlayContext';
import SpendingInput from './screens/SpendingInput'; 
import SpendingDetailsComponent from './screens/SpengingDetails';


const Tab = createBottomTabNavigator();


export default function App() {


  
  const Overlay=useContext(OverlayContext);
  const visible:boolean=Overlay.visible;//binding the state to local variables


//this context needs to work in tandem with add button
  
  return (

    <OverlayToggleContextProvider>
      <Provider store={store}>
      <KeyboardAvoidingView>
        <SpendingInput/>
      </KeyboardAvoidingView>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{
            headerRight:({color,size}:any)=> <HeaderButton size={30}/>
            }}>            
            <Tab.Screen 
              name="All Expenses" 
              component={AllExpenses}
              options={{
                tabBarIcon: ({color,size}:any)=>(<Ionicons name="cash-outline" color={color} size={size}/>)
              }}
              
              
              />
            <Tab.Screen 
              name="Recent expenses" 
              component={RecentExpenses}
              options={{
                tabBarIcon: ({color,size}:any)=>(<Ionicons name="receipt-outline" color={color} size={size}/>)
              }}
              />
            <Tab.Screen 
              name="Profile"
              component={Profile}
              options={{
                tabBarIcon: ({color,size}:any)=>(<Ionicons name="person-outline" color={color} size={size}/>)
              }}/>

            <Tab.Screen 
              name="Details"
              component={SpendingDetailsComponent}
              options={{
                tabBarButton: () => null
              }}/>

            

            
            
            
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </OverlayToggleContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  overlay:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    flexDirection:'column-reverse'
  }
});

/**
 * todo: 
    //create a light wrapper which makes an API call and fetches data from firebase
  +RECEIVING
    //-->what we display is the response of the API call + redux content which should dynamically change
  +SENDING:
    //-->submit button should incorporate post API call as well: a) post api call will give id b)save item in context with id

 */