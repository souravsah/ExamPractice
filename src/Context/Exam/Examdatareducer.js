export default (state,action) =>{
    switch(action.type){
        case "SET_PHYSICSQUESNUM":
            return {...state,["physicsquesnum"]:action.payload-1}
        case "CHANGE_OPTION_SELECTED":
            return{
                ...state,["physics"]:{...state.physics,["chapter1"]:{...state.physics.chapter1,["Questions"]:[...state.physics.chapter1.Questions].map((item,idx)=>{
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
        ...state,["physics"]:{...state.physics,["chapter1"]:{...state.physics.chapter1,["Questions"]:[...state.physics.chapter1.Questions].map((item,idx)=>{
            if(action.payload===idx){
                return {...item,["visited"]:true}
            }
            else{
                return item
            }
        
        })}}

            }
        default:
            return state;
    }
}