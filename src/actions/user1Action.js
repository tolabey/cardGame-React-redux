export const ADD_CARD_TO_USER1 = "ADD_CARD_TO_USER1";
export function addCardToUser1(cardId) {
    return {
        type: ADD_CARD_TO_USER1,
        payload: cardId
    }
}

export const INITIAL_CARDS = "INITIAL_CARDS";
export function initilizeCards1(cards) {
    return {
        type: INITIAL_CARDS,
        payload: cards,
    }
}