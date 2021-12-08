import React, { useContext, useState } from 'react'
import { Examdatastrore } from '../../Context/Exam/Examdata'
import { Chapternamecss } from './Chaptername.style'

const Chaptername = ({name ,chapter,idx,length}) => {
    let {setchaptername} = useContext(Examdatastrore)
    let [arr,setarr]=useState(new Array(length).fill(false));

    const handleclick = () =>{
        arr[idx]=!arr[idx]
        setarr(arr)
        console.log(arr)
        console.log(name)
        setchaptername(chapter)
    }
    return (
        <Chapternamecss onClick={handleclick} color={arr[idx]}>{name}</Chapternamecss>
    )
}

export default Chaptername
