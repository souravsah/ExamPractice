import React, { useContext } from 'react'
import { Examdatastrore } from '../../Context/Exam/Examdata'
import { Chapternamecss } from './Chaptername.style'

const Chaptername = ({name ,chapter}) => {
    let {setchaptername} = useContext(Examdatastrore)
    const handleclick = () =>{
        console.log(name)
        setchaptername(chapter)
    }
    return (
        <Chapternamecss onClick={handleclick}>{name}</Chapternamecss>
    )
}

export default Chaptername
