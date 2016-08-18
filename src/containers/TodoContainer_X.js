import React, { Component } from 'react';
import TodoFilter_X from '../components/TodoFilter_X';
import TodoList_X from '../components/TodoList_X';
import TodoCreator_X from '../components/TodoCreator_X';
import { connect } from 'react-redux';
import { addTodo, complete, setFilter } from '../actions';

class TodoContainer_X extends Component{
    render() {
        const { items, filter='All', onAddTodo, onComplete, onSetFilter } = this.props;
        let filteredItems = {};
        if(filter === 'All'){
            filteredItems = items;
        }else{
            for(let i in items){
                const item = items[i];
                if(item.status === filter){
                    filteredItems[item.id] = item;
                }
            }
        }
        return (
            <div>
                <TodoFilter_X onSetFilter={(filter) => onSetFilter(filter)} />
                <TodoList_X items={filteredItems}  onComplete={(id) => onComplete(id)} />
                <TodoCreator_X onAddTodo={(title) => onAddTodo(title)} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.items,
        filter: state.filter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAddTodo: (title) => dispatch(addTodo(title)),
        onComplete: (id) => dispatch(complete(id)),
        onSetFilter: (filter) => dispatch(setFilter(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer_X);