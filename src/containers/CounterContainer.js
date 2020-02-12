import {
    connect
} from 'react-redux';

import Counter from '../components/Counter';

import {
     actionIncrement, 
     actionDecrement
} from '../actions';

function mapStateToProps(state) {
    return {
        count: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleIncrement: () => {
            dispatch(actionIncrement())
        }, 
        handleDecrement: () => {
            dispatch(actionDecrement())
        }
    }
}

// this part makes no sense to me!!!
const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(Counter);