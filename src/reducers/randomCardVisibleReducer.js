import {RANDOM_CARD} from "../actions/randomCardAction"

export function randomCardVisibleReducer(visible = false, action) {
    switch (action.type){
        case RANDOM_CARD:
            return action.payload
        default:
            return visible
    }
}