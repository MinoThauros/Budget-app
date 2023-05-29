//login and signup hooks to be used in the login and signup components
//use setQuery hook regardless
import { useMutation, useQuery } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { AuthInterface } from '../API/http';
import { SignInResponsePayload, SignUpResponsePayload } from '../API/httpUtils';


//CUD action so either we post a new item
type useMutationProps = {
    onSuccess: (param:any) => void;
    queryClient: QueryClient;
}

const {login,signup}= new AuthInterface();

export const useLogin = ({onSuccess}:{onSuccess: (param:SignInResponsePayload) => void}) => {
    return useMutation(['login'], login,{
        onSuccess: (data) => onSuccess(data),
        retry:3,
        cacheTime: 15 * (60 * 1000), // 15 mins 
        //for errors, simply notify the user
})}

export const useSignup = ({onSuccess}:useMutationProps) => {
    return useMutation(['signup'], signup,{
        onSuccess: (data) => onSuccess(data),
        retry:3,
        cacheTime: 15 * (60 * 1000), // 15 mins 
    })
}