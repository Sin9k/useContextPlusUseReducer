import { useContext } from 'react';
import { Bank } from '../context/Bank';

export const useGlobal = () =>{
	return useContext(Bank);
}