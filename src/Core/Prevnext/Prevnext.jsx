import React, { useContext } from 'react'
import { Prevnextcss } from './Prevnext.style'
import { GrPrevious ,GrFormNext } from 'react-icons/gr';
import { Examdatastrore } from '../../Context/Exam/Examdata';

const Prevnext = () => {
    let {setphysicsquesnum ,physicsquesnum,setVisitedstatus } = useContext(Examdatastrore)
    console.log(physicsquesnum)
    return (
        <Prevnextcss>
        <div>
            <span onClick={()=>
            {
                setphysicsquesnum(physicsquesnum)
                setVisitedstatus(physicsquesnum)

            }}><GrPrevious size={20}/></span>
        </div>
        <div>
            <span onClick={()=>{
            setVisitedstatus(physicsquesnum +2) 
            setphysicsquesnum(physicsquesnum+2)
            }}><GrFormNext size={35}/></span>

        </div>
        </Prevnextcss>
    )
}

export default Prevnext
