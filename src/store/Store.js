import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import jwtDecode from 'jwt-decode';
import { UserLogout } from './login/loginService';

let middleware = [];

const persistConfig = {
    key: 'hqcustomer',
    storage,
}

// const checkTokenExpirationMiddleware = store => next => action => {
//     // const token = store.getState()?.login?.userData?.jwtToken;
//     const token = localStorage.getItem("customer.token");
//     console.log('tkkken ', token)
//     if ((token && jwtDecode(token).exp < (Date.now() / 1000))) {
//         store.dispatch(UserLogout());
//         next(action);
//     }
//     // else if (!token) {
//     //     console.log('cames here')
//     //     store.dispatch(UserLogout());
//     //     next(action);
//     // }
//     next(action);
// };

const persistedReducer = persistReducer(persistConfig, rootReducer)

// if (process.env.NODE_ENV === 'development') {
middleware = [...middleware, logger, thunk];
// } else {
//     middleware = [...middleware, thunk];
// }
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
