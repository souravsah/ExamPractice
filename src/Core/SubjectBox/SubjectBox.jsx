import React, { useState } from 'react'
import { BsCircle } from 'react-icons/bs';
import {  SubjectBoxcss } from './SubjectBox.style';
import { IoMdCheckmarkCircle} from 'react-icons/io';
import logo from "../../Images/logo.png"
const SubjectBox = ({Physics,handlePage}) => {
    let [toggle,setToggle]=useState(false);
    const handleToggle =()=>setToggle(!toggle);
    return (
        <SubjectBoxcss onClick={handlePage}>
        <div>
        <img src={logo} alt="" />
            <div>
                <h4>{Physics}</h4>
                <p>Chapter 17 | 315 Questions</p>
            </div>
        </div>
            
        </SubjectBoxcss>
    )
}

export default SubjectBox
