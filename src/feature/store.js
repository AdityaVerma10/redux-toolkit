import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './CartSlice';
const store=configureStore({
    reducer:{
        auth:CartSlice,
    }
});

export default store;