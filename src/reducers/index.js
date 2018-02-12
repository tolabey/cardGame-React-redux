import {combineReducers} from "redux"
import {cardsReducer} from "./cardsReducer"
import {randomCardVisibleReducer} from "./randomCardVisibleReducer"
import {user1CardsReducer} from "./user1CardsReducer"
import {user2CardsReducer} from "./user2CardsReducer"
import {turn} from "./turnReducer"



const allReducers = combineReducers({
    cards: cardsReducer,
    randomCardVisible:  randomCardVisibleReducer,
    user1Cards: user1CardsReducer,
    user2Cards: user2CardsReducer,
    turn: turn,
});

export default allReducers;