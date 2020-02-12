import { 
    INCREMENT, 
    DECREMENT, 
    RESET 
} from "./actions";

// const alphabet = [

// ]

export default function count(state=0, action) {
    let newState = state;
    switch (action.type) {
        case INCREMENT:
            newState += 1;
            break;
        case DECREMENT:
            newState -= 1;
            break;
        case RESET:
            newState = 0;
            break;
        default:
            break;
    }
    return newState;
}