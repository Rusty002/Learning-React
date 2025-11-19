import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        isFetchDone:false,
        currentlyFetching:false
    },
    reducers: {
        markFetchDone:(state) => {
            state.isFetchDone = true;
            return state;
        },
        markFetchingStarted:(state) => {
            state.currentlyFetching = true;
            return state;
        },
        markFetchingFinished:(state) => {
            state.currentlyFetching = false;
            return state;
        }
    }
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
