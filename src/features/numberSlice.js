import {createSlice} from "@reduxjs/toolkit";

// crear el slice 
const numberSlice = createSlice({
    name: 'number', //nombre del slice
    initialState:{ //estado inicial de la varible
        value: 0
    },
    reducers: {

        // funciones que cambiaran el estado de la variable
        increaseNumber:(state)=>{
            state.value += 1;
        },
        decreaseNumber:(state)=>{
            state.value -= 1;
        }
    }
});

// exportando dos funciones
export const {increaseNumber, decreaseNumber} = numberSlice.actions;
export default numberSlice.reducer;