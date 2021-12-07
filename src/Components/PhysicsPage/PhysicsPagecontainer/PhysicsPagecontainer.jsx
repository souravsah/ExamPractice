import React, { useContext, useState } from 'react'
import Chapters from '../../../Core/Chapter/Chapters'
import Question from '../../../Core/QuestionTab/Question'
import ScrollBox from '../../../Core/ScrollBox/ScrollBox'
import {Examdatastrore} from '../../../Context/Exam/Examdata'
import PhysicsQuescontainer from '../PhysicsQuesContainer/PhysicsQuescontainer'
import Physicsscrollbox from '../Physicsscrollbox/Physicsscrollbox'
import Physicssidebar from '../Physicssidebar/Physicssidebar'
import { Physicscss } from './PhysicsPageContainer.style'
import { BsThreeDotsVertical } from 'react-icons/bs';
import Prevnext from '../../../Core/Prevnext/Prevnext'

const PhysicsPagecontainer = () => {
let {physics} = useContext(Examdatastrore)
let[toggle,settoggle]=useState(false);
const togglefunc = () =>{
    settoggle(!toggle)
}
    return (
        <Physicscss toggle={toggle}>
        <div className="scrolldot" onClick={togglefunc}>
        <li ><BsThreeDotsVertical size={35}/></li>

        </div>
        <div className={"side"}>
            <span>
            <Physicssidebar/>
            </span>
        </div>
        <div>
            <Physicsscrollbox quesnum={physics.chapter1.Questions}/>
            <PhysicsQuescontainer quesarray={physics.chapter1.Questions}/>
        </div>
        </Physicscss>
    )
}

export default PhysicsPagecontainer
