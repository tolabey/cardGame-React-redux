import {ADD_MIDDLE_CARD, RESET_MIDDLE_CARD} from "../actions/middleCardsAction"
export function middleCard(state=[], action) {
    switch (action.type) {
        case ADD_MIDDLE_CARD:
            return [...state, action.payload];
        case RESET_MIDDLE_CARD:
            return []
        default:
            return state;
    }


}
