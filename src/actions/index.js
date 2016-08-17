import {
    ADD_TODO, COMPLETE_TODO, SET_FILTER
} from '../constants/ActionTypes';

export function addTodo(title){
    return {
        type: ADD_TODO,
        title: title
    };
}

export function complete(id){
    return {
        type: COMPLETE_TODO,
        id: id
    };
}

export function setFilter(filter){
    return {
        type: SET_FILTER,
        filter: filter
    };
}