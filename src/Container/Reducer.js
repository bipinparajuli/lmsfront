export const initailState={
search:[],
searchStudent:[]
}



function Reducer(state,action) {
    console.log(action)
switch(action.type){
    case 'SEARCH':
        //logic for adding
        return {...state,search:action.item}
        case 'SEARCHSTUDENT':
        //logic for adding
        return {...state,searchStudent:action.item}
        
        
                default:
                return state
}

}


export default Reducer
