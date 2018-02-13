
export const ADD_CARD_TO_USER2 = "ADD_CARD_TO_USER2";
export function addCardToUser2(cardId) {
    return {
        type: ADD_CARD_TO_USER2,
        payload: cardId
    }
}

export const INITIAL_CARDS2 = "INITIAL_CARDS2";
export function initilizeCards2(payload) {
    return {
        type: INITIAL_CARDS2,
        payload,
    }
}

export const REMOVE_CARD_FROM_USER2 = "REMOVE_CARD_FROM_USER2";
export function removeCardFromUser2() {
    return {
        type: REMOVE_CARD_FROM_USER2,
    }

}