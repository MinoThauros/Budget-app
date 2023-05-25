import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { HTTPInterface } from '../API/http';
import { spending } from '../models/spending';
import { QueryClient } from '@tanstack/react-query';

//CUD action so either we post a new item
type useMutationProps = {
      onSuccess: (param:any) => void;
      queryClient: QueryClient;
}

const {storeExpense, getExpenses, deleteExpense,updateExpense} = new HTTPInterface();

export const useGetExpenses = ({onSuccess}:{onSuccess:({data}:{data:spending[]})=>void}) => {
      return useQuery(['expenses'], getExpenses,{
         onSuccess:(data)=>{           
            onSuccess({data})},//run provided callback

      });
}

export const useStoreExpense = ({onSuccess,queryClient}:useMutationProps) => {
      return useMutation(storeExpense,{
            onSuccess: (data) => {
                  console.log(data)
                  onSuccess({data})},
            onMutate: async (newSpending:spending) => {

                  console.log('new spending is',newSpending)

                  // Cancel any outgoing refetches
                  // (so they don't overwrite our optimistic update)
                  await queryClient.cancelQueries({queryKey: ['expenses']});

                  // Snapshot the previous value
                  const previousSpendings = queryClient.getQueryData(['expenses']) as spending[];
                  console.log('previous spendings are',previousSpendings)

                  // Optimistically update to the new value
                  queryClient.setQueryData(['expenses'], (old:any) => [...old, newSpending] as spending[]);

                  // Return a context object with the snapshotted value
                  return { previousSpendings };
            },

            // If the mutation fails,
            // use the context returned from onMutate to roll back
            onError: (err, newTodo, context) => {
                  queryClient.setQueryData(['expenses'], context?.previousSpendings as spending[])
            },

            // Always refetch after error or success: invalidate cache
            onSettled: () => {
                  queryClient.invalidateQueries({ queryKey: ['expenses'] })
            },
      })

}

export const useDeleteExpense = ({onSuccess,queryClient}:useMutationProps) => {
      return useMutation(deleteExpense,{
            onSuccess: (data) => onSuccess({data} as any),
            onMutate: async (id:string) => {
                        
                  // Cancel any outgoing refetches
                  // (so they don't overwrite our optimistic update)
                  await queryClient.cancelQueries(['expenses']);

                  // Snapshot the previous value
                  const previousSpendings = queryClient.getQueryData(['expenses']) as spending[];

                  // Optimistically update to the new value
                  queryClient.setQueryData(['expenses'], (old? :spending[]) => old ? old.filter((expense:spending)=>expense.id!==id): []as spending[]);

                  // Return a context object with the snapshotted value
                  return { previousSpendings };
            },
            onError(error, variables, context) {
                  // Rollback the optimistic update
                  queryClient.setQueryData(['expenses'], context?.previousSpendings??[] as spending[]);
            },
            onSettled: () => {
                  queryClient.invalidateQueries(['expenses'])
            }
      })
}

export const useUpdateExpense = ({onSuccess,queryClient}:useMutationProps) => {
      return useMutation(updateExpense,{
            onSuccess: (data) => onSuccess({data} as {data:spending[]}),
            onMutate: async ({id,updatedExpense}:{id:string,updatedExpense:spending}) => {
                  // Cancel any outgoing refetches
                  // (so they don't overwrite our optimistic update)
                  await queryClient.cancelQueries(['expenses']);

                  // Snapshot the previous value
                  const previousSpendings = queryClient.getQueryData(['expenses']) as spending[];

                  // Optimistically update to the new value
                  queryClient.setQueryData(['expenses'], (old? :spending[]) => old ? old.map((expense:spending)=>expense.id===id?updatedExpense:expense): []as spending[]);

                  // Return a context object with the snapshotted value 
                  return { previousSpendings };
            },
            onError(error, variables, context) {
                  // Rollback the optimistic update
                  queryClient.setQueryData(['expenses'], context?.previousSpendings??[] as spending[]);
                  

            },onSettled: () => {
                  queryClient.invalidateQueries(['expenses'])

            }  
      })

}




