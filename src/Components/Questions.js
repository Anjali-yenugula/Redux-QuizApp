import React from 'react'
import "../App.css"
import {connect} from "react-redux"


const Questions = (props) => {
    let {count,questions} = props
    return (
        <div>
            <h2 style={{height:"150px"}}>{questions[count]}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        
        count:state.count,
        questions:state.questions
    }
}


export default connect(mapStateToProps,null)(Questions)
