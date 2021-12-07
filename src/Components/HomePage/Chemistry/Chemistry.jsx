import React from 'react'
import { useHistory } from 'react-router';
import SubjectBox from '../../../Core/SubjectBox/SubjectBox'
const Chemistry = () => {
    let history = useHistory();
    const handlePage = () =>history.push("/chemistry")

    return (
        <>
        <SubjectBox Physics={"Chemistry"}
                    handlePage={handlePage}

        /> 

        </>
    )
}

export default Chemistry
