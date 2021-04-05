import React from 'react'
import { connect } from "react-redux";
import { loadData, nextQuestion, checkAnswer ,playAgain} from "../Actions/actions";
import Score from "./Score"
import Quiz from "./Quiz"
import Options from "./Options"
import Questions from "./Questions"
import { Button, Card, Container} from '@material-ui/core';

class Main extends React.Component {
    componentDidMount() {
        this.props.loadData()
    }


    render() {
        let { count, questions, selectedAnswers } = this.props
        console.log(this.props);
        return (
            <Container>
            <Quiz />
        <Card style={{ margin: "4% auto", padding: "15px", textAlign: "center", height: "80%", width: "60%",}}>
        {count <= questions?.length - 1 ?
                        (<div>
                        <Questions/>
        {/* <h2 style={{height:"150px"}}>{questions[count]}</h2> */}
        <Options/>
                        
                            {selectedAnswers[count] &&
                                <Button variant="contained" color="primary" onClick={() => { this.props.nextQuestion() }}>NEXT</Button>}
                        </div>
                        ) : (
                            <div>
                            <Score />

                            </div>
                        )
                    }
                </Card>
            </Container>

        )
    }
};

const mapStateToProps = state => {
    return {
        count: state.count,
        options: state.options,
        questions: state.questions,
        score: state.score,
        selectedAnswers: state.selectedAnswers,
        correctAnswers:state.correctAnswers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadData: () => { dispatch(loadData()) },
        checkAnswer: (option) => { dispatch(checkAnswer(option)) },
        nextQuestion: () => { dispatch(nextQuestion()) },
        playAgain:()=>{dispatch(playAgain())}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)
