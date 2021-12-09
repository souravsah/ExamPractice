import React, { useContext } from 'react'
import {Chemistry} from "../../../Data/Chemistry/Chemistry"
import { useHistory } from 'react-router'
import SubjectBox from '../../../Core/SubjectBox/SubjectBox'
import Examdatareducer from '../../../Context/Exam/Examdatareducer'
import { physics } from '../../../Data/Physics/Physics'
import { Examdatastrore } from '../../../Context/Exam/Examdata'
const PhysicsBox = () => {
  let {setdatachemistry}=useContext(Examdatastrore)
  let history = useHistory();
  const handlePage = () =>{
    history.push("/physics")
    setdatachemistry(physics)
  }
    return (
        <>
          <SubjectBox Physics={"Physics"} 
                      handlePage={handlePage}
          /> 
        </>
    )
}

export default PhysicsBox
