import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Image } from "sanity";
import { RootState } from "../store";
export interface Product {
  _id: string;
  name: string;
  price: number;
  totalPrice: number;
  subCat: string;
  image: Array<Image>;
  userId: string;
  qunatity: number;
}

interface CartState {
  items: Array<Product>;
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state: CartState,
      action: PayloadAction<{ product: Product; quantity: number }>
    ) => {
      const newitem = action.payload.product;

      const existingItem = state.items.find(
        (item) => item._id === action.payload.product._id
      );

      state.totalQuantity = state.totalQuantity + action.payload.quantity;

      state.totalAmount =
        state.totalAmount +
        action.payload.quantity * action.payload.product.price;

      if (!existingItem) {
        const totalPrice = newitem.price * action.payload.quantity;
        state.items.push({
          ...newitem,
          qunatity: action.payload.quantity,
          totalPrice,
        });
      } else {
        const totalPrice =
          existingItem.totalPrice +
          existingItem.price * action.payload.quantity;
        existingItem.qunatity += action.payload.quantity;
        existingItem.totalPrice = totalPrice;
      }
    },
    removeProduct(state: CartState, action: PayloadAction<string>) {
      const productId = action.payload;
      state.items.filter((item) => item._id !== productId);
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.qunatity,
        0
      );
      state.items.reduce((total, item) => total + item.totalPrice, 0);
    },
    decrementCartProduct(state: CartState, action: PayloadAction<string>) {
      const Product = action.payload;
      const existingItem = state.items.find((item) => item._id === Product);
      state.totalQuantity--;
      state.totalAmount = state.totalAmount - existingItem?.price!; //If item and price available execute this line otherwise skip it

      if (existingItem?.qunatity === 1) {
        state.items = state.items.filter((item) => item._id !== Product);
      } else {
        existingItem!.qunatity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem!.price!;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
