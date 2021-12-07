import React from 'react'
import { useHistory } from 'react-router'
import SubjectBox from '../../../Core/SubjectBox/SubjectBox'

const PhysicsBox = () => {
  let history = useHistory();
  const handlePage = () =>history.push("/physics")
    return (
        <>
          <SubjectBox Physics={"Physics"} 
                      handlePage={handlePage}
          /> 
        </>
    )
}

export default PhysicsBox
