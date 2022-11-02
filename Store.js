
import { configureStore} from '@reduxjs/toolkit'
import reducerFn from './Reducer';

const store = configureStore({reducer:reducerFn});
export default store;