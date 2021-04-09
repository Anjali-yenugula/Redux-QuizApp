import { LOAD_DATA, NEXT_QUESTION, CHECK_ANSWER ,PLAY_AGAIN} from "./constants"


export const loadData = () => {
    return (dispatch) => {
        fetch('http://11d5354086d5.ngrok.io/data')
            .then(res => res.json())
            .then(data => {
                let {
                    questions,
                    answers,
                    solutions,
                } = data;
                dispatch({
                    type: LOAD_DATA,
                    payload: {
                        correctAnswers: solutions,
                        options: answers,
                        questions,
                    }
                })
            })
    }
}

export const nextQuestion = (count) => {
    return {
        type: NEXT_QUESTION,
        count: count
    }
}
export const playAgain =()=>{
    return {
        type : PLAY_AGAIN
    }
}

export const checkAnswer = (option) => {
    return (dispatch) => {
        dispatch({
            type: CHECK_ANSWER,
            payload: {
                selectedAnswer: option,
            }
        })
    }
}