import { configureStore } from "@reduxjs/toolkit";
import { localStorageMiddleware } from "./middleware/localStorageMiddleware";

import todoReducer from "./todo";

const store = configureStore({
  reducer: todoReducer,
  middleware: [localStorageMiddleware]
});

export default store;
