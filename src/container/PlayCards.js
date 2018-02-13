import React, { Component } from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {user1Turn, user2Turn} from "../actions/turnAction"
import {removeCardFromUser1} from "../actions/user1Action"
import {removeCardFromUser2, addCardToUser2} from "../actions/user2Action"
import {addMiddleCardList} from "../actions/middleCardsAction"
import {resetMiddleCards} from "../actions/middleCardsAction"
import {addCardToUser1} from "../actions/user1Action"


class PlayCards extends Component {

    constructor(props) {
        super(props);
        this.state = {topCard: {card: "", id: 1}}
    }

    play(user) {
        if(user === "user1") {
            var a = this.props.user1Cards[0];

            this.props.addMiddleCardList(a);
            console.log(this.state.topCard, a)
            this.props.removeCardFromUser1();
            if(this.state.topCard.card.split("_")[0] === a.card.split("_")[0]) {

                this.props.middleCard.map((card) => {
                    this.props.addCardToUser1(card);
                })
                this.props.addCardToUser1(a)

                this.props.resetMiddleCards();
                this.setState({topCard: {card: "", id: 1}})
            }
            this.setState({topCard: a});

            document.getElementById("user1").disabled = true;
            document.getElementById("user2").disabled = false;
            this.props.user1Turn();

        } else {
            var b = this.props.user2Cards[0];
            this.props.addMiddleCardList(b);
            console.log(this.state.topCard, b)

            this.props.removeCardFromUser2();


            if(this.state.topCard.card.split("_")[0] === b.card.split("_")[0]) {
                this.props.middleCard.map((card) => {
                    this.props.addCardToUser2(card);
                })
                this.props.addCardToUser2(b)

                this.props.resetMiddleCards();
                this.setState({topCard: {card: "", id: 1}})
            }

            this.setState({topCard: b})
            document.getElementById("user1").disabled = false;
            document.getElementById("user2").disabled = true;
            this.props.user2Turn();


        }
    }


    consoleLog() {
        console.log(this.state);

    }

    render() {
        return (
            <div className="cardsShuffle">
                <button onClick={() => this.consoleLog()}>Console.log</button>
                    <div id="mustafa">Text</div>
                    <button id="user1" value="3"  onClick={() => this.play("user1")}>USER 1</button>
                    <button id="user2"  onClick={() => this.play("user2")}>USER 2</button>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        turn: store.turn,
        user1Cards: store.user1Cards,
        user2Cards: store.user2Cards,
        middleCard: store.middleCard,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        user1Turn: user1Turn,
        user2Turn: user2Turn,
        removeCardFromUser1: removeCardFromUser1,
        removeCardFromUser2: removeCardFromUser2,
        addMiddleCardList: addMiddleCardList,
        addCardToUser1: addCardToUser1,
        addCardToUser2: addCardToUser2,
        resetMiddleCards: resetMiddleCards,
    },dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PlayCards);

