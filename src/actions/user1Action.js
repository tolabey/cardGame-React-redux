export const ADD_CARD_TO_USER1 = "ADD_CARD_TO_USER1";
export function addCardToUser1(payload) {
    return {
        type: ADD_CARD_TO_USER1,
        payload,
    }
}

export const INITIAL_CARDS = "INITIAL_CARDS";
export function initilizeCards1(payload) {
    return {
        type: INITIAL_CARDS,
        payload,
    }
}

export const REMOVE_CARD_FROM_USER1 = "REMOVE_CARD_FROM_USER1";
export function removeCardFromUser1() {
    return {
        type: REMOVE_CARD_FROM_USER1,
    }

}