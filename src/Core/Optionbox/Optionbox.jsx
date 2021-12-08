import React, { useContext, useState } from 'react'
import { Examdatastrore } from '../../Context/Exam/Examdata'
import { Optioncss } from './Optionbox.style'
const Optionbox = ({option,idx}) => {
    let {physics,physicsquesnum,changeOptionselected,physicschaptername}= useContext(Examdatastrore)
    const handleoption = (e) =>{
        if(physics[physicschaptername].Questions[physicsquesnum].attempted){
            return;
        }
        changeOptionselected({
            ["arrayindex"]:physicsquesnum,
            ["optionnumber"]:`option${e.target.textContent.substring(0,1).trim()}`,
            ["help"]:option,
            ["chaptername"]:physicschaptername
        })
        console.log(option)
    }
    return (
        <Optioncss onClick={handleoption} color={option.optionselected } color1={option.correctanscheck}><span>{idx}.</span><span>{option.optiontext}</span> </Optioncss>
        )
}

export default Optionbox
