import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import SubjectBox from '../../../Core/SubjectBox/SubjectBox'
import { maths } from '../../../Data/Maths/Maths';
import { Examdatastrore } from '../../../Context/Exam/Examdata';
const Maths = () => {
    let history = useHistory();
    let {setdatachemistry ,physics,Chemistry} = useContext(Examdatastrore)
    const handlePage = () =>{
        history.push("/math")
        setdatachemistry(maths)

    }
    return (
        <>
        <SubjectBox Physics={"Mathematics"}
                    handlePage={handlePage}
        /> 
        </>
    )
}

export default Maths
