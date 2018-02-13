import React, { Component } from 'react';
import {connect} from "react-redux"
import "../css/renderCards.css"

const svgs = require.context('../svg-cards', true, /\.svg$/)

const svgsObj = svgs.keys()
    .reduce((images, key) => {
        images[key] = svgs(key)
        return images
    }, {});

class RenderGame extends Component {

    constructor(props){
        super(props);
    }


    renderUsersCards() {
        var user1Card = this.props.user1Cards[0];
        var user2Card = this.props.user2Cards[0];

        return <div className="render">
                    <div className="user1Card card">
                        <h2>User1 Card {this.props.user1Cards.length}</h2>

                        <img key={user1Card.id} alt="default" src={svgsObj[user1Card.card]}/>
                    </div>
                            {this.renderMiddleCard()}
                    <div className="user2Card card">
                        <h2>User2 Card {this.props.user2Cards.length}</h2>

                        <img key={user2Card.id} alt="default" src={svgsObj[user2Card.card]}/>
                    </div>


                </div>
    }

    renderMiddleCard(){

        if(this.props.middleCard[0]!== undefined){
            var midCard = this.props.middleCard[this.props.middleCard.length - 1];


            return  <div className="midCard card">
                        <h1>{this.props.middleCard.length}</h1>
                       <img key={midCard.id} alt="default" src={svgsObj[midCard.card]}/>
                    </div>
        }else{
            return <div className="midCard card">{this.props.middleCard.length}</div>
        }

    }

    render() {
        return (
            <div className="cardsShuffle">
                <h1>{this.props.turn} NUMARALI OYUNCUNU OYNADI</h1>
                {this.renderUsersCards()}
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

export default connect(mapStateToProps)(RenderGame);

