import React from "react"
import {checkAnswer } from "../Actions/actions";
import "../App.css"
import {connect} from "react-redux"


const Options=(props)=>{
    let {options,count} = props
    return (
        <div >
         {options[count]?.map((option) => (
            <p className="option" onClick={() =>props.checkAnswer(option)}>{option}</p>
        ))}
        </div>
    );

}

const mapStateToProps = state => {
    return {
        
        count:state.count,
        options:state.options
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        checkAnswer:(option)=>{dispatch(checkAnswer(option))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Options)

