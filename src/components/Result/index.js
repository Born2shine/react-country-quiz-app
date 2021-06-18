import React from 'react'
import Card from '../../common/components/Card'
import logo from "../../assets/images/undraw_winners_ao2o 2.svg"
import styled from 'styled-components'
import { Animated } from "react-animated-css";

const ResultStyle = styled.div`
        text-align: center;
        padding: 2rem;
        .title{
            color: #1D355D;   
            font-weight: 800; 
            text-transform: capitalize;
            font-size: 2rem
        }
        .result-logo{
            margin: .1rem 0;
            img{
                width: 200px
            }
        }
        .message{
            margin: 2rem 0
        }
        .score{
            font-size: 1.5rem;
            color: #56ce56;
            font-weight: bold
        }
        .btn-restart{
            border: 2px solid #1D355D;
            background: none;
            color: #1D355D;
            padding: .8rem 2rem
        }
    `;

const Result = () => {
   
    return (
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <Card>
                <ResultStyle>
                    <div className="result-logo">
                        <img src={logo} alt="result_logo" />
                    </div>
                    <h1 className="title">Results</h1>
                    <p className="message">You got <span className="score">5</span> correct answers</p>
                    <button className="btn btn-restart"> Try again</button>
                </ResultStyle>
            </Card>
       </Animated>
    )
}

export default Result
