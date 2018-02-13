import {ADD_CARD_TO_USER1, INITIAL_CARDS, REMOVE_CARD_FROM_USER1} from "../actions/user1Action"

export function user1CardsReducer(state=[], action) {
    switch (action.type) {
        case INITIAL_CARDS:
            return [...state, action.payload];
        case ADD_CARD_TO_USER1:
            return [...state, action.payload];
        case REMOVE_CARD_FROM_USER1:
            return state.filter(card => card.id !== state[0].id)
        default:
            return state
    }
}