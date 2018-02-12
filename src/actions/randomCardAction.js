export const RANDOM_CARD = "RANDOM_CARD";
export const randomCardAction = (visible) => {
    return {
        type: RANDOM_CARD,
        payload: visible,
    }
}