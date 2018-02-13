import React, { Component } from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {randomCardAction} from "../actions/randomCardAction"
import {initilizeCards1} from "../actions/user1Action"
import {initilizeCards2} from "../actions/user2Action"

class CardInit extends Component {

    constructor(props) {
        super(props)
        for(var i = 0; i < this.props.cards.length;) {
            this.props.initilizeCards1(this.props.cards[i]);
            i++;
            this.props.initilizeCards2(this.props.cards[i]);
            i++
        }
    }




    randomCardsControl() {
        console.log(this.props.store)
    }

    render() {
        return (
            <div className="cardView">
                <button onClick={() => this.randomCardsControl()}>RANDOM ICIN BURAYA TIKLA</button>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        randomCardVisible: store.randomCardVisible,
        user1Cards: store.user1Cards,
        user2Cards: store.user2Cards,
        cards: store.cards,
        store: store

    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        randomCardAction: randomCardAction,
        initilizeCards1: initilizeCards1,
        initilizeCards2: initilizeCards2,
    },dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CardInit);