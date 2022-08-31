import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    error: ''
}

// createAsyncthunk --> Provides pending, fulfilled, rejected
export const fetchUsers = createAsyncThunk('user/fetusers', () => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.data.map(user => user))
})

const useSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state =>{
            state.loading = true
        }),
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false,
            state.users = action.payload
        }),
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false,
            state.users = [],
            state.error = action.error.message
        })
    }
})

export default useSlice.reducer;