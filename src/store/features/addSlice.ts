import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { dataPriceProducts } from "../../Home";

export interface IProduct {
    id: string,
    name: string,
    price: number,
    quatity:number
}

const initialState: IProduct[] = [];

export const addSlice = createSlice({
    name: 'add',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<IProduct>) => {
            const itemExists = state.some(item => item.id === action.payload.id)
            if(itemExists){
                const item = state.findIndex(item => item.id === action.payload.id)
                state[item].price = state[item].price + dataPriceProducts[item].price;
                state[item].quatity = state[item].quatity + 1
            } else {
                state.push(action.payload)
            }
            
            return state
        },
        decrement: (state, action:PayloadAction<IProduct>) => {
            const itemExists = state.some(item => item.id === action.payload.id)
            if(itemExists){
                const item = state.findIndex(item => item.id === action.payload.id)
                console.log(state[item].quatity > 1)
                if(state[item].quatity > 1){
                    state[item].price = state[item].price - dataPriceProducts[item].price
                    state[item].quatity = state[item].quatity - 1 
                } else {
                    // Filtrar os itens diferentes do item que deve ser removido
                    const newState = state.filter(item => item.id !== action.payload.id);
                                    
                    // Retornar o novo estado
                    return newState;
                }
            }
            return state;
        },
    }
})

export const { increment, decrement} = addSlice.actions;

export default addSlice.reducer;