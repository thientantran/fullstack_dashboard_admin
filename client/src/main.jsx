import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { api } from "./api.js";
import "./index.css";
import globalSliceReducer from "./store.js";

import { setupListeners } from "@reduxjs/toolkit/dist/query/index.js";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    global: globalSliceReducer,
    [api.reducerPath]: api.reducer, // thêm reducer được tạo từ api slice
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
  //thêm api middleware để thêm các tính năng caching, polling, invalidation, rtk-query
});
setupListeners(store.dispatch);
// optional nhưng bắt buộc nếu muốn dùng tính năng refetchOnFocus/ refetchOnReconnect
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
