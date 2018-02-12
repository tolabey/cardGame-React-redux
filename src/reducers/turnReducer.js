import {USER1_TURN, USER2_TURN} from "../actions/turnAction"
export function turn(state=1, action) {
    switch (action.type) {
        case USER1_TURN:
            return 1;
        case USER2_TURN:
            return 2;
        default:
            return state;
    }


}
