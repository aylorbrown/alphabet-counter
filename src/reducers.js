import { 
    INCREMENT, 
    DECREMENT
} from "./actions";


export function count(state=12, action) {
    let newState = state;
    switch (action.type) {
        case INCREMENT:
            if (newState < 25) {
                newState += 1;
            } else {
                newState = 0;
            }        
            break;
        case DECREMENT:
            newState -= 1;
            break;
        default:
            break;
    }
    return newState;
}