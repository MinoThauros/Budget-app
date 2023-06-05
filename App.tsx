import { StyleSheet, View } from 'react-native';
import { QueryClientProvider, QueryClient} from '@tanstack/react-query';
import AuthStack from './AuthStack';
import AuthPages from './screens/AuthPages';
import { AuthContext, AuthContextProvider } from './states/context/CredentialsContext';
import { useContext } from 'react';
import { SnackBarContext, SnackBarContextProvider } from './states/context/SnackBarContext';
import SnackBar from './components/SnackBar';

const Pages=()=>{
    const {isAuthenticated}=useContext(AuthContext)
    return(
      <>
        {isAuthenticated && <AuthStack/>}
        {!isAuthenticated && <AuthPages/>}
      </>
        
        

    )
}
const queryClient = new QueryClient();

export default function App() {
  
  return (
  <QueryClientProvider client={queryClient}>
    <SnackBarContextProvider>
    <AuthContextProvider>
      <Pages/>
      <SnackBar/>
    </AuthContextProvider>
    </SnackBarContextProvider>
  </QueryClientProvider>
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
