//login and signup hooks to be used in the login and signup components
//use setQuery hook regardless
import { useMutation, useQuery } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { AuthInterface } from '../API/http';
import { SignInResponsePayload, SignUpResponsePayload } from '../API/httpUtils';


//CUD action so either we post a new item
type useMutationProps = {
    onSuccess: ({idToken}:{idToken:string}) => void;
    queryClient: QueryClient;
}

const {login,signup}= new AuthInterface();

export const useLogin = ({onSuccess}:{onSuccess: ({idToken}:{idToken:string}) => void}) => {
    return useMutation(['login'], login,{
        onSuccess:({data})=>onSuccess({idToken:data.idToken}),
        onError:({response})=>console.log('response is',response.data.error.message,response.data.error.code),
        //axios returns a .response prop when there is an error
        cacheTime: 15 * (60 * 1000), // 15 mins 
        //for errors, simply notify the user
})}

export const useSignup = ({onSuccess}:{onSuccess: ({idToken}:{idToken:string}) => void}) => {
    return useMutation(['signup'], signup,{
        onSuccess:({data})=>onSuccess({idToken:data.idToken}),
        //axios returns a .response prop when there is an error
        //there is no data on error, only response
        onError:({response})=>console.log(response.data.error.message,response.data.error.code),
    })
}