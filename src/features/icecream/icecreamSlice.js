import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

const initialState = {
    numberOfIcecreams: 25
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIcecreams--
        },
        restocked: (state, action) => {
            state.numberOfIcecreams += action.payload
        }
    },
    // calling action of  reducer can affect other one.
    // e.g., One purchasing 1 cake, 1 icecream is free.
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numberOfIcecreams--
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, state => {
            state.numberOfIcecreams--
        })
    }
})

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;