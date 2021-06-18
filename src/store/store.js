
const store = () => {
    
    return {
        countries: [],
        questionData: {
            currentQuestion: null,
            answer: null,
            options: []
        },
        score: 0,
        counter: 0,
        answered: 0,
        loading: true
    }
}

export default store;