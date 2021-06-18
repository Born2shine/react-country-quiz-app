import logo from '../../assets/images/undraw_adventure_4hum 1.svg'
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import { MdCancel } from "react-icons/md"
import Card from '../../common/components/Card'
import { Animated } from "react-animated-css";
import { useGlobalContext } from '../../provider/context';
import { useEffect } from 'react';

const Question = () => {
    const { state, onNextClick, startQuiz, randQuestion } = useGlobalContext()   
    useEffect(() => {
             if(state.questionData){
                // const { country, quesion_type, currentQuestion, options, answer } = randQuestion()
                console.log(state.questionData.currentQuestion )
             }
    },[state.questionData])
    if(state.loading){
        return <div>Loading...</div>
    }
    return( state.questionData ?
        
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <Card>
                {state.questionData.quesion_type === 'flag' &&
                    <div className="flag">
                        <img src={state.questionData.country.flag} alt="flag" />
                        {/* {state.questionData.answer} */}
                    </div>
                   
                }
                <h3 className="question">{state.questionData.currentQuestion}</h3>
                <div className="options">
                    {
                        state.questionData.options.map((option, index) => {
                            const optionLabel = ['A', 'B', 'C', 'D']
                            return (
                                <div className="option" key={index}>
                                    <span className="option-type">{optionLabel[index]}</span>
                                    <div className="answer">{option}</div>
                                    <span className="result-icon"><IoIosCheckmarkCircleOutline/></span>
                                </div>
                            )
                        })
                    }
                    
                    {/* <div className="option">
                        <span className="option-type">B</span>
                        <div className="answer">Vietnam</div>
                        <span className="result-icon"><MdCancel/></span>
                    </div>
                    <div className="option">
                        <span className="option-type">C</span>
                        <div className="answer">Vietnam</div>
                        <span className="result-icon">✔</span>
                    </div>
                    <div className="option">
                        <span className="option-type">D</span>
                        <div className="answer">Vietnam</div>
                        <span className="result-icon">✔</span>
                    </div> */}
                </div>
                <button className="btn btn-next" onClick={onNextClick}>Next</button>
                <div className="logo">
                <img src={logo} alt="" />
                </div>
            </Card>
        </Animated>
        : ''
    )
}

export default Question