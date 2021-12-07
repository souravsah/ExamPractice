import React from 'react'
import SubjectContainer from '../SubjectContainer/SubjectContainer'
import { ExamboxConatinercss } from './Examboxcontainer.style'

const Examboxcontainer = () => {
    return (
        <div>
            <ExamboxConatinercss>
        <div>
            <h3>Subjects</h3>
            <p>You can select only one subject</p>

        </div>
        </ExamboxConatinercss>
            <SubjectContainer/>
        </div>
    )
}

export default Examboxcontainer
