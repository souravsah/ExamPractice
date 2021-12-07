import React from 'react'
import Optionbox from '../Optionbox/Optionbox'
import { Optioncss } from '../Optionbox/Optionbox.style'
import Prevnext from '../Prevnext/Prevnext'
import { Questioncss } from './Question.style'

const Question = ({quesarray}) => {
    return (
        <>
        <Questioncss>
        <div>
            <h4>
            {quesarray.question}
            </h4>
        </div>
        <ul>
        <Optionbox option={quesarray.option.option1} idx={1}/>
        <Optionbox option={quesarray.option.option2} idx={2}/>
        <Optionbox option={quesarray.option.option3} idx={3}/>
        <Optionbox option={quesarray.option.option4} idx={4}/>
        
        </ul>
        </Questioncss>
        <Prevnext/>

        </>
    )
}

export default Question
