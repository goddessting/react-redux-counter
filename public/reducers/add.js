import {ADD, SUBTRACT} from '../actions/actionsType';

function add(state = {count: 0}, action) {
    switch (action.type) {
        case ADD:
            return {count: state.count + 1};
        case SUBTRACT:
            return {count: state.count - 1};
            // return Object.assign({}, {state: state.count - 1});
    }
    return state;
}

export default add;