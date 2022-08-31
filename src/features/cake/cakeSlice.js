import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numberOfCakes: 10
};

// Pros of using createSlice from redux/toolkit.
// 1. No need of creating actions & action constants.
// 2. No need of providing state manupulation using spread operators. Can directly access the state (Internally uses immer)
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfCakes--
        },
        restocked: (state, action) => {
            state.numberOfCakes += action.payload
        }
    }
})

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;