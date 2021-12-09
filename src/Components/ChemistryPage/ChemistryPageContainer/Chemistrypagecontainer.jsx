import React, { useContext, useState } from 'react'
import { Examdatastrore } from '../../../Context/Exam/Examdata'
import ChemistruquesContainer from '../ChemistryquesContainer/ChemistruquesContainer'
import Chemistryscrollbar from '../ChemistryScrollbox/Chemistryscrollbar'
import Chemistrysidebar from '../Chemistrysidebar/Chemistrysidebar'
import { Chemistrycss } from './Chemistrypagecontainer.style'
import { BsThreeDotsVertical } from 'react-icons/bs';

const Chemistrypagecontainer = () => {
    let {Chemistry ,chemistrychaptername} = useContext(Examdatastrore)   
    let[toggle,settoggle]=useState(false);
    console.log(Chemistry)
    const togglefunc = () =>{
    settoggle(!toggle)
    }

    return (
        <Chemistrycss toggle={toggle}>
        <div className="scrolldot" onClick={togglefunc}>
         <li ><BsThreeDotsVertical size={35}/></li>

        </div>
        <div className={"side"}>
            <span>
            <Chemistrysidebar />
            </span>
        </div>
        <div>
            <Chemistryscrollbar quesnum={Chemistry[chemistrychaptername].Questions}/>
            <ChemistruquesContainer quesarray={Chemistry[chemistrychaptername].Questions}/>

        </div>

        </Chemistrycss>
    )
}

export default Chemistrypagecontainer
