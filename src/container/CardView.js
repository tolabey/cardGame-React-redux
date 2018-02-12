import React, { Component } from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {randomCardAction} from "../actions/randomCardAction"
import {initilizeCards1} from "../actions/user1Action"
import {initilizeCards2} from "../actions/user2Action"
const svgs = require.context('../svg-cards', true, /\.svg$/)


const svgsObj = svgs.keys()
    .reduce((images, key) => {
        images[key] = svgs(key)
        return images
    }, {})


class CardView extends Component {

    constructor(props) {
        super(props)
        for(var i = 0; i < 20; i++) {
            var a = this.randomCards()
            this.props.initilizeCards1(a)
             a = this.randomCards()
            this.props.initilizeCards2(a)
        }
        console.log(this.props.user1Cards)
    }

    //render all cards
    cardsRender() {
        return svgs.keys().map((key => {
            return <img key={key} src={svgsObj[String(key)]}/>

        }))
    }

    //render one card
    randomCards() {
        var tempCard = null;
        var control = 0;
        var a = parseInt(Math.random() * svgs.keys().length);

        svgs.keys().map((key => {
            if(a === control) {
                control += 1;
                tempCard = key
            }
            control += 1;
        }))
        return tempCard
    }

    randomCardsControl() {
        console.log(this.props)
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

    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        randomCardAction: randomCardAction,
        initilizeCards1: initilizeCards1,
        initilizeCards2: initilizeCards2,

    },dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CardView);