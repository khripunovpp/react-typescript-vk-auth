import {
    LOG_IN,
    LOG_OUT
} from "../constants";
import {
    IAuthActions,
    IAuthState
} from "../../types/types";

const initialState: IAuthState = {
    login: false,
    token: {}
}

const authReducer = (state = initialState, action: IAuthActions): IAuthState => {
    switch (action.type) {
        case LOG_OUT:
            return state;
        case LOG_IN:
            return state;
        default:
            return state
    }
}

export {authReducer}
