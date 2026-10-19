import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      items: [],
      totalQuantity: 0,
      totalAmount: 0,
   },
   reducers: {
      removeItem: (state, action) => {
         const id = action.payload;
         const existingItem = state.items.find((item) => item.id === id);
         if (existingItem) {
            state.items = state.items.filter((item) => item.id !== id);
            state.totalQuantity -= existingItem.quantity;
            state.totalAmount -= existingItem.price * existingItem.quantity;
         }
      },
      
      AddItem: (state, action) => {
         const newItem = action.payload;
         const existingItem = state.items.find((item) => item.id === newItem.id);
         if (existingItem) {
            existingItem.quantity += newItem.quantity;
            state.totalQuantity += newItem.quantity;
            state.totalAmount += newItem.price * newItem.quantity;
         } else {
            state.items.push(newItem);
            state.totalQuantity += newItem.quantity;
            state.totalAmount += newItem.price * newItem.quantity;
         }
      }
   }
})

export const { removeItem, AddItem } = cartSlice.actions;

export default cartSlice.reducer;