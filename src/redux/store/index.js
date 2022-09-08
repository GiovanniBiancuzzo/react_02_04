//Implementa il pattern Redux nell’applicazione, con uno store e un reducer.

import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

const store = configureStore({
    reducer: mainReducer
});

export default store;