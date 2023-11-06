import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "./reducers/api-reducer"

export const store = configureStore({
    reducer: {
        photos: photoReducer
    }
});