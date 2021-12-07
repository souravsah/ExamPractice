import React from 'react'
import { Li, ScrollBoxcss } from './ScrollBox.style'

const ScrollBox = ({quesnum,handlClick,settogglefunc}) => {
    return (
        <ScrollBoxcss 
        >
        <li style={
            {
                width: "26px",
                marginRight:"5px"
            }
        }></li>
        {
            quesnum.map((item,idx)=><Li onClick={handlClick} visited={quesnum[idx].visited}
                                                             attempted={quesnum[idx].attempted}
            >{idx+1}</Li>)
        }
        </ScrollBoxcss>
    )
}

export default ScrollBox
