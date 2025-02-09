import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Image } from "sanity";
import { RootState } from "../store";
export interface Product {
  _id: string;
  title: string;
  price: number;
  totalPrice: number;
  subcat: string;
  image: Image;
  userId: string;
  quantity: number;
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
          quantity: action.payload.quantity,
          totalPrice,
        });
      } else {
        const totalPrice =
          existingItem.totalPrice +
          existingItem.price * action.payload.quantity;
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice = totalPrice;
      }
    },
    removeProduct(state: CartState, action: PayloadAction<string>) {
      const productId = action.payload;
      state.items.filter((item) => item._id !== productId);
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.items.reduce((total, item) => total + item.totalPrice, 0);
    },
    decrementCartProduct(state: CartState, action: PayloadAction<string>) {
      const Product = action.payload;
      const existingItem = state.items.find((item) => item._id === Product);
      state.totalQuantity--;
      state.totalAmount = state.totalAmount - existingItem?.price!; //If item and price available execute this line otherwise skip it

      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item._id !== Product);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem!.price!;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

// import { Image } from "sanity";

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store";
// import { urlForImage } from "../../../sanity/lib/image";

// interface CartState {
//   items: Array<Product>;
//   totalAmount: number;
//   totalQuantity: number;
//   isLoading: boolean;
//   error: any;
// }
// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   totalPrice: number;
//   subcat: string;
//   image: Array<Image>;
//   userId: string;
//   quantity: number;
// }

// const initialState: CartState = {
//   items: [],
//   totalQuantity: 0,
//   totalAmount: 0,
//   isLoading: false,
//   error: null,
// };

// export const fetchData = createAsyncThunk(
//   "cart/fetchData",
//   async (userId: string) => {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/${userId}`
//     );

//     if (!res.ok) {
//       console.log("Failed to Fetch Data From API");
//     }

//     const data = await res.json();

//     return data; // Return the cart data as the payload
//   }
// );

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(
//       state: CartState,
//       action: PayloadAction<{ product: Product; quantity: number }>
//     ) {
//       const newItem = action.payload.product;
//       const existingItem = state.items.find((item) => item._id === newItem._id);

//       state.totalQuantity = state.totalQuantity + action.payload.quantity;
//       state.totalAmount =
//         state.totalAmount +
//         action.payload.quantity * action.payload.product.price;

//       if (!existingItem) {
//         const totalPrice = newItem.price * action.payload.quantity;
//         state.items.push({
//           ...newItem,
//           // @ts-ignore
//           image: urlForImage(newItem.image[0]).url(),
//           quantity: action.payload.quantity,
//           totalPrice,
//         });
//       } else {
//         const totalPrice =
//           existingItem.totalPrice +
//           existingItem.price * action.payload.quantity;
//         existingItem.quantity += action.payload.quantity;
//         existingItem.totalPrice = totalPrice;
//       }
//     },

//     removeProduct(state: CartState, action: PayloadAction<string>) {
//       const productId = action.payload;
//       state.items = state.items.filter((item) => item._id !== productId);
//       state.totalQuantity = state.items.reduce(
//         (total, item) => total + item.quantity,
//         0
//       );
//       state.totalAmount = state.items.reduce(
//         (total, item) => total + item.totalPrice,
//         0
//       );
//     },

//     removeFromCart(state: CartState, action: PayloadAction<string>) {
//       const productId = action.payload;
//       const existingItem = state.items.find((item) => item._id === productId);

//       state.totalQuantity--;

//       state.totalAmount = state.totalAmount - existingItem?.price!;

//       if (existingItem?.quantity === 1) {
//         state.items = state.items.filter((item) => item._id !== productId);
//       } else {
//         existingItem!.quantity--;
//         existingItem!.totalPrice =
//           existingItem!.totalPrice - existingItem?.price!;
//       }
//     },
//     clearCart(state) {
//       state = initialState;
//     },
//   },
//   extraReducers: (builder) => {
//     // handle async actions with builder methods
//     builder.addCase(fetchData.pending, (state) => {
//       // set loading state to true
//       state.isLoading = true;
//     });
//     builder.addCase(fetchData.fulfilled, (state, action) => {
//       const { cartItems, totalQuantity, totalAmount } = action.payload;
//       state.items = cartItems;
//       state.totalAmount = totalAmount;
//       state.totalQuantity = totalQuantity;
//       state.isLoading = false;
//     });
//     builder.addCase(fetchData.rejected, (state, action) => {
//       // set loading state to false and error state to true
//       state.isLoading = false;
//       state.error = action.error;
//     });
//   },
// });

// export const selectIsLoading = (state: RootState) => state.cart.isLoading;

// export const cartActions = cartSlice.actions;

// export default cartSlice.reducer;
