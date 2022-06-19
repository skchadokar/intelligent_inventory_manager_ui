import { combineReducers } from "redux";
import { alertReducer, navigationReducer } from "./common/commonReducer";
import { loginReducer } from "./login/loginReducer";
import { Types } from "./types";

const combineReducer = combineReducers({
    alert: alertReducer,
    login: loginReducer,
    navigation: navigationReducer
});

const rootReducer = (state, action) => {
    //action to clear application redux
    if (action.type === Types.USER_LOGOUT) {
        state = {};
    }
    return combineReducer(state, action);
}

// export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
