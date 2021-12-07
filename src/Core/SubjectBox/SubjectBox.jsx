import React, { useState } from 'react'
import { BsCircle } from 'react-icons/bs';
import { SelectBox, SubjectBoxcss } from './SubjectBox.style';
import { IoMdCheckmarkCircle} from 'react-icons/io';
import logo from "../../Images/logo.png"
const SubjectBox = ({Physics,handlePage}) => {
    let [toggle,setToggle]=useState(false);
    const handleToggle =()=>setToggle(!toggle);
    return (
        <SubjectBoxcss>
        <div>
        <img src={logo} alt="" />
            <div>
                <h4>{Physics}</h4>
                <p>Chapter 17 | 315 Questions</p>
            </div>
        </div>
        <SelectBox onClick={
            ()=>{
                handleToggle()
                handlePage()
            }

        } toggle={toggle} >
        {
            toggle?<IoMdCheckmarkCircle/>:<BsCircle/>
        }
            
            
        </SelectBox>
            
        </SubjectBoxcss>
    )
}

export default SubjectBox
