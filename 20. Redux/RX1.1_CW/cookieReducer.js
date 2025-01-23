// logic for what should happend when click on button
const initialState = { value:0 }

const cookieReducer = (state = initialState, action) =>{
    switch(action.type) { //action is object
        case "cookies/added":
            return { value: state.value + 1 }
        case "cookies/removed":
            return { value: state.value - 1 }
        default:
            return state
    }
}

export default cookieReducer;