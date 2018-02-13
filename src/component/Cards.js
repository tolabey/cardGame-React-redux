import React, { Component } from 'react';
import CardInit from "../container/CardInit"
import CardSuffle from "../container/CardShuffle"
import PlayCards from "../container/PlayCards"
import RenderGame from "../container/RenderGame"

class Cards extends Component {
    render() {
        return (
            <div className="cards">
                <CardSuffle></CardSuffle>
                <CardInit></CardInit>
                <PlayCards></PlayCards>
                <RenderGame></RenderGame>
            </div>
        );
    }
}

export default Cards;
