import React, { useContext } from 'react'
import { Prevnextcss } from './Prevnext.style'
import { GrPrevious ,GrFormNext } from 'react-icons/gr';
import { Examdatastrore } from '../../Context/Exam/Examdata';

const Prevnext = () => {
    let {setphysicsquesnum ,physicsquesnum,setVisitedstatus,physicschaptername } = useContext(Examdatastrore)
    console.log(physicsquesnum)
    return (
        <Prevnextcss>
        <div>
            <span onClick={()=>
            {
                setphysicsquesnum(physicsquesnum)
                setVisitedstatus({
                    data:physicsquesnum,
                    chaptername:physicschaptername,

                })

            }}><GrPrevious size={20}/></span>
        </div>
        <div>
            <span onClick={()=>{
            setVisitedstatus({
                data:physicsquesnum+1,
                chaptername:physicschaptername,
            }) 
            setphysicsquesnum(physicsquesnum+2)
            }}><GrFormNext size={35}/></span>

        </div>
        </Prevnextcss>
    )
}

export default Prevnext
