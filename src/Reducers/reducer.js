import { CHECK_ANSWER, LOAD_DATA, NEXT_QUESTION ,PLAY_AGAIN} from "../Actions/constants";

const initialState = {
    count: 0,
    options: [],
    questions: [],
    score: 0,
    selectedAnswers: [],
    correctAnswers: [],
};

const reducer = (state = initialState, action) => {

    let {
        type,
        payload,
    } = action;

    switch (type) {
        case LOAD_DATA:
            return {
                ...state,
                correctAnswers: payload.correctAnswers,
                count: 0,
                options: payload.options,
                questions: payload.questions,
                score: 0,
                selectedAnswers: [],
            };

        case NEXT_QUESTION:
            return {
                ...state,
                count: state.count + 1,
            };

        case CHECK_ANSWER:
            console.log(state.selectedAnswers);
            if (payload.selectedAnswer === state.correctAnswers[state.count]) {
                return {
                    ...state,
                    score: state.score + 1,
                    selectedAnswers: [...state.selectedAnswers, payload.selectedAnswer],
                }
            }
            return {
                ...state,
                selectedAnswers: [...state.selectedAnswers, payload.selectedAnswer],
            };
        case PLAY_AGAIN:
            return{
                ...state,
                count: 0,
                score: 0,
                selectedAnswers:[]

            };

        default :
            return state;

    }
};

export default reducer;
