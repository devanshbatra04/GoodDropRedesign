import {LOGGED_IN} from "../actions/index";

export default function (state = {
    phoneNo: "",
    isLoggedIn: false
}, action) {
    switch (action.type) {
        case LOGGED_IN:
            // return state.concat([action.payload.data]);
            let newState = state;
            newState.phoneNo = action.payload.data;
            newState.isLoggedIn = true;
            return newState;
    }
    return state;
}