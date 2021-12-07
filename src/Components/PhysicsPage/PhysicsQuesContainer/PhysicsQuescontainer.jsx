import React, { useContext } from 'react'
import { Examdatastrore } from '../../../Context/Exam/Examdata'
import Question from '../../../Core/QuestionTab/Question'

const PhysicsQuescontainer = ({quesarray}) => {
    let {physicsquesnum } = useContext(Examdatastrore)
    return (
        <Question quesarray={quesarray[physicsquesnum]}/>
    )
}

export default PhysicsQuescontainer
