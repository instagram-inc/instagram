import { createStore } from 'redux';
import userReduser from './common/reducers/userReduser'

const store = createStore(userReduser);
export default store;
