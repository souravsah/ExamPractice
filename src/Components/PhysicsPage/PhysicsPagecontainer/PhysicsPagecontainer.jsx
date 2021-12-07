import React, { useContext } from 'react'
import Chapters from '../../../Core/Chapter/Chapters'
import Question from '../../../Core/QuestionTab/Question'
import ScrollBox from '../../../Core/ScrollBox/ScrollBox'
import {Examdatastrore} from '../../../Context/Exam/Examdata'
import PhysicsQuescontainer from '../PhysicsQuesContainer/PhysicsQuescontainer'
import Physicsscrollbox from '../Physicsscrollbox/Physicsscrollbox'
const PhysicsPagecontainer = () => {
let {physics} = useContext(Examdatastrore)
console.log(physics)
    return (
        <div style={
            {
                display: "flex",
                width:"100vw"
            }
        }>
        <div><Chapters/></div>
        <div>
            <Physicsscrollbox quesnum={physics.chapter1.Questions.length}/>
            <PhysicsQuescontainer quesarray={physics.chapter1.Questions}/>
        </div>

        </div>
    )
}

export default PhysicsPagecontainer
