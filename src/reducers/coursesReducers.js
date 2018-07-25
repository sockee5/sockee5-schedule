import { 
    FETCH_COURSES,
    Toggle_Enrolled
 } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_COURSES:

            return [
                ...state,
                ...action.payload
            ]
         case Toggle_Enrolled:
            return state

        default:
            return state;
    }

}