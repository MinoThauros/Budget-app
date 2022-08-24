import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Alert, Button, SafeAreaView, ToastAndroid } from 'react-native';
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
      <SpendingInput/>
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
 * 
 * F) Option to delete spending; 
 * =>create spending details page by passing spending id as a prop to the page
 *   through route params
 * =>give access to redux to spendingDetails <<done>>
 * =>from spendingDetails, fetch/delete the desired spending
 * =>from spendingDetails, edit the expense (push a new spending at the id)
 * 
 * 
 * 
 * G) think about a recap and insight page (optional)
 * 
 * bugs:
 * A) the  id passed to the details screen doesnt change dinamically
 */