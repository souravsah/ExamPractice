import React, { useContext, useState } from 'react'
import { Examdatastrore } from '../../../Context/Exam/Examdata'
import ScrollBox from '../../../Core/ScrollBox/ScrollBox'

const Physicsscrollbox = ({quesnum}) => {
    let {physicsquesnum,physics ,setphysicsquesnum,setVisitedstatus,physicschaptername}=useContext(Examdatastrore)
    const handlClick = (e) =>{
        setphysicsquesnum(Number(e.target.textContent))
        setVisitedstatus({
            data:Number(e.target.textContent)-1,
            chaptername:physicschaptername,
        })
    }
    return (
        <>
           <ScrollBox quesnum={quesnum}
                      handlClick={handlClick}
             /> 
        </>
    )
}

export default Physicsscrollbox
