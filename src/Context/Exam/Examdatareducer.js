export default (state,action) =>{
    switch(action.type){
        case "SET_PHYSICSQUESNUM":
            return {...state,["physicsquesnum"]:action.payload-1}
        case "CHANGE_OPTION_SELECTED":
            return{
                ...state,["physics"]:{...state.physics,[action.payload.chaptername]:{...state.physics[action.payload.chaptername],["Questions"]:[...state.physics[action.payload.chaptername].Questions].map((item,idx)=>{
                    if(idx===action.payload.arrayindex){
                        return {...item,["correct"]:action.payload.help.correctanscheck,["option"]:{...item.option,[action.payload.optionnumber]:{
                            ...action.payload.help,
                            optionselected:true,
        
                        }},["attempted"]:true}
                    }
                    else 
                    return item
                })}}
            }
        case "SET_VISITED":
            return{
        ...state,["physics"]:{...state.physics,[action.payload.chaptername]:{...state.physics[action.payload.chaptername],["Questions"]:[...state.physics[action.payload.chaptername].Questions].map((item,idx)=>{
            if(action.payload.data===idx){
                return {...item,["visited"]:true}
            }
            else{
                return item
            }
        
        })}}

            }
     case "SET_CHAPTER_NAME":
     return {...state,["physicschaptername"]:action.payload}
        default:
            return state;
    }
}