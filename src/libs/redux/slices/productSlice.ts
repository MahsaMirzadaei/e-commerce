import { Product } from "@/types/products.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  productsList: Product[];
}

const initialState: ProductState = {
  productsList: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.productsList = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
