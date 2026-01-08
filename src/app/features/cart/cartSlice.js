import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { id, name, price (unit price), quantity }
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, name, price, quantity, image, color, size } = action.payload;
      const cartId = `${id}-${color}-${size}`;
      const existingItem = state.items.find((item) => item.cartId === cartId);

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.price = existingItem.unitPrice * existingItem.quantity;
      } else {
        state.items.push({
          cartId,
          id,
          name,
          unitPrice: price,
          price: price * quantity,
          quantity,
          image,
          color,
          size,
        });
      }

      state.totalQuantity += quantity;
      state.totalPrice += price * quantity;
    },
    removeItem(state, action) {
      const cartId = action.payload;
      const item = state.items.find((item) => item.cartId === cartId);

      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price;
        state.items = state.items.filter((item) => item.cartId !== cartId);
      }
    },
    updateQuantity(state, action) {
      const { cartId, quantity } = action.payload;
      const item = state.items.find((item) => item.cartId === cartId);

      if (item && quantity >= 1) {
        const quantityChange = quantity - item.quantity;

        state.totalQuantity += quantityChange;
        state.totalPrice += item.unitPrice * quantityChange;
        item.quantity = quantity;
        item.price = item.unitPrice * quantity;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
