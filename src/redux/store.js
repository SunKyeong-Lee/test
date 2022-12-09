import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
});

export default store;
