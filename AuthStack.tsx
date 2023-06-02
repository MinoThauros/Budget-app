import { KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpenses from './screens/RecentExpensesScreen';
import Profile from './screens/profile';
import {Ionicons} from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store } from './states/redux/store';
import {HeaderButton} from './components/headerAddButton';
import OverlayToggleContextProvider from './states/context/InputOverlayContext';
import SpendingInput from './screens/SpendingInput'; 
import SpendingDetailsComponent from './screens/SpengingDetails';
import AllExpensesReactQuery from './ReactQ_screens/AllExpensesReactQuery';
import SpendingInputReactQ from './ReactQ_screens/SpendingInputReactQ';
import SpendingDetailsReactQ from './ReactQ_screens/SpendingDetailsReactQ';
import AuthPages from './screens/AuthPages';

const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <OverlayToggleContextProvider>
      <Provider store={store}>
      <KeyboardAvoidingView>
        <SpendingInput/>
        <SpendingInputReactQ/>
      </KeyboardAvoidingView>
        <NavigationContainer>
          <Tab.Navigator 
          initialRouteName='AllExpensesReactQuery'
          screenOptions={{
            headerRight:({color,size}:any)=> <HeaderButton size={30}/>
            }}>
            {/*
            
            <Tab.Screen 
              name="All Expenses" 
              component={AllExpenses}
              options={{
                tabBarIcon: ({color,size}:any)=>(<Ionicons name="cash-outline" color={color} size={size}/>)
              }}/>
            */}          
            
            <Tab.Screen
              name="AllExpensesReactQuery"
              component={AllExpensesReactQuery}
              options={{
                tabBarIcon: ({color,size}:any)=>(<Ionicons name="stop" color={color} size={size}/>)
              }}/>
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
  )
}

export default AuthStack