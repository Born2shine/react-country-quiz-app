import React from 'react'


const reducer = (state, action) => {
   
    switch (action.type) {
        case "FETCH_DATA":
            return {...state, countries: action.payload, loading: true}    
        case "NEXT_QUESTION":
            return {...state}
        case 'START_QUIZ':
            // console.log(action.payload)
            const { country, quesion_type, currentQuestion, options, answer } = action.payload
            const newQues = {
                quesion_type: quesion_type,
                currentQuestion: currentQuestion,
                answer: answer,
                options: options,
                country: country
            }
            return {...state, loading: false, questionData: newQues}
        default:
           throw new Error
    }
}

export default reducer
