import {
    LOG_IN,
    LOG_OUT
} from "../store/constants";

export interface IAuthState {
    login: boolean,
    token: object
}

interface ILogInAction {
    type: typeof LOG_IN,
    payload?: object
}

interface ILogOutAction {
    type: typeof LOG_OUT,
    payload?: object
}

export type IAuthActions = ILogInAction | ILogOutAction

export interface IProfileState {
    loading: boolean,
    errors: object,
    profile: object,
    friends: []
}