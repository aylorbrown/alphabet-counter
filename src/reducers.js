import { 
    INCREMENT, 
    DECREMENT, 
    RESET 
} from "./actions";

export default function count(state='m', action) {
    let newState = state;
    switch (action.type) {
        case INCREMENT:
            break;
        case DECREMENT:
            break;
        case RESET:
            break;
        default:
            break;
    }
    return newState;

}