import React, { Component } from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {user1Turn, user2Turn} from "../actions/turnAction"


class PlayCards extends Component {

    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        return (
            <div className="cardsShuffle">
                    Coni coni
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        turn: store.turn
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        user1Turn: user1Turn,
        user2Turn: user2Turn,
    },dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(playCards);

