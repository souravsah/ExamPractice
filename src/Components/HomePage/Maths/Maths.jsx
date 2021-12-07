import React from 'react'
import { useHistory } from 'react-router';
import SubjectBox from '../../../Core/SubjectBox/SubjectBox'
const Maths = () => {
    let history = useHistory();
    const handlePage = () =>history.push("/math")
  
    return (
        <>
        <SubjectBox Physics={"Mathematics"}
                    handlePage={handlePage}
        /> 
        </>
    )
}

export default Maths
