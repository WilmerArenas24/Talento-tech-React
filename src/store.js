import { configureStore } from "@reduxjs/toolkit";
import numberReducer from './features/numberSlice'

// Agrupamos los estados en una sola ubicacion
const store  = configureStore({
    reducer:{
        // agregando slice
        number: numberReducer

    }
})

export default store;