import React, { createContext, useReducer } from "react";
import Examdatareducer from "./Examdatareducer"
import {maths} from "../../Data/Maths/Maths"
import { physics } from "../../Data/Physics/Physics";
import { Chemistry } from "../../Data/Chemistry/Chemistry";
let initialdata={
    physicsquesnum:0,
    physicschaptername:"chapter2",
    physics:{...physics},
    Maths :{...maths},
    Chemistry:{...Chemistry}

}
export const Examdatastrore = createContext(initialdata);

export const Examdata = ({children}) =>{
const [state,dispatch]=useReducer(Examdatareducer,initialdata);
const setphysicsquesnum = (data) =>{
dispatch({
    type:"SET_PHYSICSQUESNUM",
    payload:data,
})
}
const changeOptionselected = (obj) =>{
dispatch({
    type:"CHANGE_OPTION_SELECTED",
    payload:obj
})
}
const setVisitedstatus = (data) =>{
    dispatch({
        type:"SET_VISITED",
        payload:data
    })
}
const setchaptername = (data) =>{
    dispatch({
        type:"SET_CHAPTER_NAME",
        payload:data,
    })
}
return (
<Examdatastrore.Provider
    value={
        {
            physics:state.physics,
            Chemistry:state.Chemistry,
            Maths:state.Maths,
            physicsquesnum:state.physicsquesnum,
            physicschaptername:state.physicschaptername,
            setphysicsquesnum,
            changeOptionselected,
            setVisitedstatus,
            setchaptername,
        }
    }
    >
    {children}
</Examdatastrore.Provider>
);
}