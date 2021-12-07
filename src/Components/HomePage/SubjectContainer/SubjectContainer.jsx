import React from 'react'
import SubjectBox from '../../../Core/SubjectBox/SubjectBox'
import Chemistry from '../Chemistry/Chemistry'
import Maths from '../Maths/Maths'
import PhysicsBox from '../PhysicsBox/PhysicsBox'
import { SubjectContainercss } from './SubjectContainer.style'

const SubjectContainer = () => {
    return (
        <SubjectContainercss>
            <PhysicsBox/>
            <Chemistry/>
            <Maths/>

        </SubjectContainercss>
    )
}

export default SubjectContainer
