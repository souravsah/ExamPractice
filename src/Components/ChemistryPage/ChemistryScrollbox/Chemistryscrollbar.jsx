import React, { useContext } from 'react'
import { Examdatastrore } from '../../../Context/Exam/Examdata'
import ScrollBox from '../../../Core/ScrollBox/ScrollBox'

const Chemistryscrollbar = ({quesnum}) => {
    let {setchemistryquesnum ,setVisitedstatuschemistry ,chemistrychaptername } = useContext(Examdatastrore)
    const handlClick = (e) =>{
        setchemistryquesnum(Number(e.target.textContent))
        setVisitedstatuschemistry({
            data:Number(e.target.textContent)-1,
            chaptername:chemistrychaptername,
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

export default Chemistryscrollbar
