import userReduser from './common/reducers/userReduser';
import { createStore } from 'redux';

const store = createStore(userReduser);

export default store;
