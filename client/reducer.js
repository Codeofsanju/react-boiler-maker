//import axios from 'axios';

//ACTION TYPES
const GET_USER = 'GET_USER';


//INITIAL STATE
const initialState = {
    user: {}
};


//ACTION CREATORS


// THUNK CREATORS



//REDUCER
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER:
            return action.user;
        default:
            return state;
    }
};

export default reducer;