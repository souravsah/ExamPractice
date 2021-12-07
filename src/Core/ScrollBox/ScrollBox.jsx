import React from 'react'
import { ScrollBoxcss } from './ScrollBox.style'

const ScrollBox = ({quesnum,handlClick}) => {
    return (
        <ScrollBoxcss>
        {
            new Array(quesnum).fill(0).map((item,idx)=><li onClick={handlClick}>{idx+1}</li>)
        }
        </ScrollBoxcss>
    )
}

export default ScrollBox
