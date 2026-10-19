import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice.js';
import cartReducer from '../features/cartSlice.js';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        
    },
})
