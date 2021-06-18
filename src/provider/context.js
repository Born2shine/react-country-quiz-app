import React, { useContext, useEffect, useReducer, useState } from "react"
import reducer from "../reducer/reducer"
import store from "../store/store"

const AppContext = React.createContext()


const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, store)
    const fetchCountries = async () => {
       try {
        const response = await fetch(`https://restcountries.eu/rest/v2/all`);
        const data = await response.json();
        dispatch({type: 'FETCH_DATA', payload: data})
       } catch (error) {
           throw new Error()
       }
      }

    const nextQuestionHandler = () => {
        dispatch({type: 'NEXT_QUESTION'})
    }

    const randQuestion = () => {
        const options = [];
        const randNum = Math.floor(Math.random() * state.countries.length);
        const TYPE = ['capital', 'flag']
        const quesion_type = TYPE[Math.floor(Math.random() * TYPE.length)]
        const country = state.countries[randNum];
        const answer = state.countries[randNum].name;
        while(options.length < 3){
            let option = Math.floor(Math.random() * state.countries.length) + 1
            if(options.indexOf(option) === -1 && options.indexOf(randNum) === -1) options.push(state.countries[option].name)
        }
        options.push(answer)
        options.sort()
        const question = () => {
                switch (quesion_type) {
                    case 'capital':
                        return `${country.capital} is the capital of?`
                    case 'flag':
                        return `Which country does this flag belong to?`              
                    default:
                        break;
                }
            }
        const currentQuestion =  question()
        return {
            country,
            quesion_type,
            currentQuestion,
            options,
            answer,
        }
    }

    const startQuiz = () => {
        dispatch({type: 'START_QUIZ', payload: randQuestion()})
    }

      useEffect(() => {
        fetchCountries();
      },[])
      useEffect(() => {
        if(state.countries){
            dispatch({type: 'START_QUIZ', payload: randQuestion()})
        }
      },[state.countries])
    return (
        <AppContext.Provider value={{
            state,
            startQuiz,
            randQuestion,
            nextQuestionHandler
        }}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => useContext(AppContext) 

export {AppProvider, AppContext}