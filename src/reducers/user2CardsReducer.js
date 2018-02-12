import {ADD_CARD_TO_USER2, INITIAL_CARDS2} from "../actions/user2Action"

export function user2CardsReducer(state=[], action) {
    switch (action.type) {
        case INITIAL_CARDS2:
            return [...state, action.payload]
        case ADD_CARD_TO_USER2:
            return [...state, action.payload];
        default:
            return state
    }
}