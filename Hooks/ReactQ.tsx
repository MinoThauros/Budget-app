import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { HTTPInterface } from '../API/http';
import { spending } from '../models/spending';

const {storeExpense, getExpenses} = new HTTPInterface();

export const useGetExpenses = ({onSuccess}:{onSuccess:({data}:{data:spending[]})=>void}) => {
      return useQuery(['expenses'], getExpenses,{
         onSuccess:(data)=>onSuccess({data}),//run provided callback

      });
}