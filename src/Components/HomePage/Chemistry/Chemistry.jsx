import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import { Examdatastrore } from '../../../Context/Exam/Examdata';
import SubjectBox from '../../../Core/SubjectBox/SubjectBox'
import { Chemistry as che} from '../../../Data/Chemistry/Chemistry';
const Chemistry = () => {
    let history = useHistory();
    let {setdatachemistry ,physics,Chemistry} = useContext(Examdatastrore)
    const handlePage = () =>{
        history.push("/chemistry")
        setdatachemistry(che)
    }
    return (
        <>
        <SubjectBox Physics={"Chemistry"}
                    handlePage={handlePage}

        /> 

        </>
    )
}

export default Chemistry
