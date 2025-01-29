import { ADD_PROFILE, REMOVE_PROFILE, CALCULATE_AVERAGE_AGE } from "./action.js";

const initialState = {profiles: [], averageAge: 0};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROFILE:
            return {
                ...state, //Copies the existing state
                profiles: [...state.profiles, action.payload], //Creates a new array with all previous profiles., Appends the new profile (action.payload).
            };
        case REMOVE_PROFILE:
            return {
                ...state,
                profiles: state.profiles.filter((profile) => profile.id != action.payload),
            };
        case CALCULATE_AVERAGE_AGE:
            const totalAge = state.profiles.reduce((acc, curr) => acc + curr.age, 0);
            const avgAge = totalAge / state.profiles.length;
            return {
                ...state, 
                averageAge: avgAge,
            };
        default:
            return state;
    }
}

export default profileReducer;