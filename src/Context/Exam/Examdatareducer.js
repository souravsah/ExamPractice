export default (state,action) =>{
    switch(action.type){
        case "SET_PHYSICSQUESNUM":
            return {...state,["physicsquesnum"]:action.payload-1}
        case "CHANGE_OPTION_SELECTED":
            return{
                ...state,["physics"]:{...state.physics,["chapter1"]:{...state.physics.chapter1,["Questions"]:[...state.physics.chapter1.Questions].map((item,idx)=>{
                    if(idx===action.payload.arrayindex){
                        return {...item,["option"]:{...item.option,[action.payload.optionnumber]:{
                            ...action.payload.help,
                            optionselected:true,
        
                        }},["clicked"]:true}
                    }
                    else 
                    return item
                })}}
            }
        default:
            return state;
    }
}