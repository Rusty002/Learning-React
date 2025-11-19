import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";



const myntraStore = configureStore({
    reducer: {
        items: itemSlice.reducer
    }
});

export default myntraStore;