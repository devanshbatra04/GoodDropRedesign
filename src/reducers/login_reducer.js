import {LOGGED_IN} from "../actions/index";

export default function (state = {}, action) {
    switch (action.type) {
        case LOGGED_IN:
            // return state.concat([action.payload.data]);
            let newState = state;
            newState.phoneNo = action.payload.data;
            return newState;
    }
    return state;
}