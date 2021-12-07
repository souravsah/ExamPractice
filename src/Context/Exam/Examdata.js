import React, { createContext, useReducer } from "react";
import Examdatareducer from "./Examdatareducer"


let initialdata={
    physicsquesnum:0,
    physics:{
        chapter1:{
        name:"Measurement",
        Questions:[
            {
            clicked:false,    
            question:"A parachutist, after bailing out, falls 50 m without friction. When parachute opens, it retards at 2 ms-2. He reaches the ground with a speed of 3 ms-1. At what height did he bail out?",
            option:{
                option1:{
                    optiontext:"ABC",
                    optionselected:false,
                    correctanscheck:false,
                    correctans:"DEF",
                },
                option2:{
                    optiontext:"DEF",
                    optionselected:false,
                    correctanscheck:true,
                    correctans:"DEF",
                },
                option3:{
                    optiontext:"KEF",
                    optionselected:false,
                    correctanscheck:false,
                    correctans:"DEF",

                },
                option4:{
                    optiontext:"None of the above",
                    optionselected:false,
                    correctanscheck:false,
                    correctans:"DEF",

                },
               
            }
        },
        {
            clicked:false,    

            question:"A at 2 ms-2. He reaches the ground with a speed of 3 ms-1. At what height did he bail out?",
            option:{
                option1:{
                    optiontext:"DEFa",
                    optionselected:false,
                    correctanscheck:true,
                    correctans:"DEFa",
                },
                option2:{
                    optiontext:"DEF",
                    optionselected:false,
                    correctanscheck:false,
                    correctans:"DEFa",
                },
                option3:{
                    optiontext:"KEF",
                    optionselected:false,
                    correctanscheck:false,
                    correctans:"DEFa",

                },
                option4:{
                    optiontext:"None of the above",
                    optionselected:false,
                    correctanscheck:false,
                    correctans:"DEFa",

                },
            }
        },
        {
            clicked:false,    

            question:"When parachute opens, it retards at 2 ms-2. He reaches the ground with a speed of 3 ms-1. At what height did he bail out?",
            option:{
                option1:{
                    optiontext:"CAB",
                    optionselected:false,
                    correctans:false,
                    correctans:"DEF",
                },
                option2:{
                    optiontext:"DEF",
                    optionselected:false,
                    correctanscheck:true,
                    correctans:"DEF",
                },
                option3:{
                    optiontext:"KEF",
                    optionselected:false,
                    correctanscheck:false,
                    correctans:"DEF",

                },
                option4:{
                    optiontext:"None of the above",
                    optionselected:false,
                    correctanscheck:false,
                    correctans:"DEF",

                },

            }
        },
        {
            question:"What reaches the ground with a speed of 3 ms-1. At what height did he bail out?",
            option:{
                option1:{
                    optiontext:"None of these",
                    optionselected:false,
                    correctans:false,
                    correctans:"DEF",
                },
                option2:{
                    optiontext:"DEF",
                    optionselected:false,
                    correctanscheck:true,
                    correctans:"DEF",
                },
                option3:{
                    optiontext:"KEF",
                    optionselected:false,
                    correctanscheck:false,
                    correctans:"DEF",

                },
                option4:{
                    optiontext:"None of the above",
                    optionselected:false,
                    correctanscheck:false,
                    correctans:"DEF",

                },

            }
        },
        {
            question:"CEO of Twitter : ",
            option:{
                option1:{
                    optiontext:"None of these",
                    optionselected:false,
                    correctans:false,
                    correctans:"DEF",
                },
                option2:{
                    optiontext:"DEF",
                    optionselected:false,
                    correctanscheck:true,
                    correctans:"DEF",
                },
                option3:{
                    optiontext:"KEF",
                    optionselected:false,
                    correctanscheck:false,
                    correctans:"DEF",

                },
                option4:{
                    optiontext:"None of the above",
                    optionselected:false,
                    correctanscheck:false,
                    correctans:"DEF",

                },

            }
        }



    ]},
   }
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
return (
<Examdatastrore.Provider
    value={
        {
            physics:state.physics,
            physicsquesnum:state.physicsquesnum,
            setphysicsquesnum,
            changeOptionselected
        }
    }
    >
    {children}
</Examdatastrore.Provider>
);
}