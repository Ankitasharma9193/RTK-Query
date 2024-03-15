import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
}

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers : {
        increment: (state) => {
            state.count+=1
        },

        decrement: (state) => {
            state.count-=1
        },

        reset: (state) => {
            state.count = 0
        },

        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    }
});
console.log(CounterSlice);
export const { increment, decrement, reset, incrementByAmount } = CounterSlice.actions;
export default CounterSlice.reducer;