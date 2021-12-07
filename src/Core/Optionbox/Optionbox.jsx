import React, { useContext, useState } from 'react'
import { Examdatastrore } from '../../Context/Exam/Examdata'
import { Optioncss } from './Optionbox.style'
const Optionbox = ({option,idx}) => {

    let {physics,physicsquesnum,changeOptionselected}= useContext(Examdatastrore)
    const handleoption = (e) =>{
        if(physics.chapter1.Questions[physicsquesnum].clicked){
            return;
        }
        changeOptionselected({
            ["arrayindex"]:physicsquesnum,
            ["optionnumber"]:`option${e.target.textContent.substring(0,1).trim()}`,
            ["help"]:option,
        })
    }
    return (
        <Optioncss onClick={handleoption} color={option.optionselected } color1={option.correctanscheck}><span>{idx}.</span><span>{option.optiontext}</span> </Optioncss>
        )
}

export default Optionbox
