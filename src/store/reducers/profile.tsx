import {
    LOG_IN,
    LOG_OUT
} from "../constants";
import {
    IAuthActions,
    IProfileState
} from "../../types/types";

const initialState: IProfileState = {
    loading: true,
    errors: {},
    profile: {},
    friends: []
}

const profile = (state = initialState, action: IAuthActions): IProfileState => {
    switch (action.type) {
        case LOG_OUT:
            return state;
        case LOG_IN:
            return state;
        default:
            return state
    }
}

export {profile}
