import { configureStore  } from '@reduxjs/toolkit';
import counterRe from '../features/counter/counterSlice';

console.log('~~~', counterRe);
export const store =  configureStore({
    reducer: {
        counter: counterRe
    }
})