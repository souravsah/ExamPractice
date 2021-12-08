import React, { useContext } from 'react'
import { Examdatastrore } from '../../../Context/Exam/Examdata'
import Chapters from '../../../Core/Chapter/Chapters'
import { Physicssidebarcss } from './Physicssidebar.style'
const Physicssidebar = () => {
    let {physics}=useContext(Examdatastrore)

    return (
        <Physicssidebarcss>
            <Chapters chaptername={physics}/>
        </Physicssidebarcss>
    )
}

export default Physicssidebar
