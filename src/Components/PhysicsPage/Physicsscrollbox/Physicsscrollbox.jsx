import React, { useContext } from 'react'
import { Examdatastrore } from '../../../Context/Exam/Examdata'
import ScrollBox from '../../../Core/ScrollBox/ScrollBox'

const Physicsscrollbox = ({quesnum}) => {
    let {physicsquesnum ,setphysicsquesnum}=useContext(Examdatastrore)
    const handlClick = (e) =>{
        setphysicsquesnum(Number(e.target.textContent))

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
