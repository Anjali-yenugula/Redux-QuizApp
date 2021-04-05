import React from "react"
import {connect} from "react-redux"
import { Button } from '@material-ui/core';
import {playAgain} from "../Actions/actions";


const Score = (props) => {
   return (
    <div>
    <h1> You scored {props.score}/10</h1>
    <Button variant="contained" color="secondary" onClick={()=>{props.playAgain()}}>Play Again</Button>
    </div>
   )
}


const mapStateToProps = state => {
    return {
        score: state.score,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        playAgain:()=>{dispatch(playAgain())}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Score)