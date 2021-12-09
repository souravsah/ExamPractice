import React, { useContext } from 'react'
import { Examdatastrore } from '../../../Context/Exam/Examdata'
import Chapters from '../../../Core/Chapter/Chapters'
import { Chemistrysidebarcss } from './Chemistrysidebar.style'

const Chemistrysidebar = () => {
    let {Chemistry} = useContext(Examdatastrore)
    return (
        <Chemistrysidebarcss>
            <Chapters chaptername={Chemistry}/>
        </Chemistrysidebarcss>
    )
}

export default Chemistrysidebar
