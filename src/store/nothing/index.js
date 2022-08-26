import manager from "./reducers";
import { useState } from 'react';

const context = {
	newKey(key, value){
		if(this.hasOwnProperty(key)){
			return false;
		}
		this[`__${key}`] = value;
		Object.defineProperty(this, key, {
			get(){
				return this[`__${key}`];
			},
			set(value){
				this[`__${key}`] = value;
				this.stateManeger[key](value);
			}
		});
	},
	useState(key, value){
		const [state, setState] = useState(value);
		this.newKey(key, state);
		this.stateManeger[key] = setState;
		return state;
	},
	stateManeger:{}
};

context.__proto__ = manager;

export default context;