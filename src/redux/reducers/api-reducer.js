import { createSlice } from "@reduxjs/toolkit";
import instance from "../../api";

const initialState = {
    loading: true,
    error: {
        status: false,
        message: "",
    },
    photos:[],
    rate_limit: {
        remaning: null,
        total: 50,
    }
};

const photoSlice =  createSlice({
    name:"api",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true;
            state.photos = [];
          },
          stopLoading: (state) => {
            state.loading = false;
          },
          saveData: (state, action) => {
            state.photos = action.payload;
          },
          catchError: (state, action) => {
            state.error.status = true;
            state.error.message = action.payload;
            state.photos = [];
          },
          cleanError: (state) => {
            state.error.status = false;
            state.error.message = "";
          },
          checkRateLimiter: (state,action)=>{
            state.rate_limit = {
                ...action.payload
            }
          }

    }
});

const { startLoading, stopLoading, saveData, catchError, cleanError, checkRateLimiter } = photoSlice.actions;
const {reducer} = photoSlice;

export const fetchData = (path) => async(dispatch) => {
    dispatch(startLoading())
    dispatch(cleanError())
    try {
        const response = await instance.get(path);
        console.log(response);
        dispatch(saveData(response.data));
        dispatch(checkRateLimiter({
            total: response.headers["x-ratelimit-limit"],
            remaning: response.headers["x-ratelimit-remaining"],
        }))
    } catch (error) {
        dispatch(catchError(error.errors));
    }
    dispatch(stopLoading());
}



export default reducer;