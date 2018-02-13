export const ADD_MIDDLE_CARD = "ADD_MIDDLE_CARD";
export function addMiddleCardList(payload) {
    return {
        type: ADD_MIDDLE_CARD,
        payload,
    }
}

export const RESET_MIDDLE_CARD = "RESET_MIDDLE_CARD";
export function resetMiddleCards(){
    "use strict";
    return {type: RESET_MIDDLE_CARD}
}