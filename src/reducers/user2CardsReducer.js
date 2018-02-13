import {ADD_CARD_TO_USER2, INITIAL_CARDS2, REMOVE_CARD_FROM_USER2} from "../actions/user2Action"

export function user2CardsReducer(state=[], action) {
    switch (action.type) {
        case INITIAL_CARDS2:
            return [...state, action.payload]
        case ADD_CARD_TO_USER2:
            return [...state, action.payload];
        case REMOVE_CARD_FROM_USER2:
            return state.filter(card => card.id !== state[0].id);
        default:
            return state
    }
}