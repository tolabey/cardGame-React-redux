import React, { Component } from 'react';
import CardView from "../container/CardView"
import CardSuffle from "../container/CardShuffle"

class Cards extends Component {
    render() {
        return (
            <div className="cards">
                <CardSuffle></CardSuffle>
                <CardView></CardView>
            </div>
        );
    }
}

export default Cards;
