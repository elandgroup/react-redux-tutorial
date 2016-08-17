import {
    ADD_TODO, COMPLETE_TODO, SET_FILTER
} from '../constants/ActionTypes';

const todoReducer = function(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ADD_TODO:
        if(newState.items === undefined){
            newState.items = {};
        }
        const id = Object.getOwnPropertyNames(newState.items).length + 1;
        const item = { id: id, title: action.title, status: 'NotCompleted' }
        let items = Object.assign({}, newState.items, { [id]: item });
        newState.items = items;
        return newState;

        case COMPLETE_TODO:
            newState.items[action.id].status = 'Completed';
            return newState;

        case SET_FILTER:
            newState.filter = action.filter;
            return newState;
    
        default:
            return state;
    }
}

export default todoReducer;