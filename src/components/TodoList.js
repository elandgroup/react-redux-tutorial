import React, { Component } from 'react';
import TodoItem from '../components/TodoItem';

export default class TodoList_X extends Component{
    render() {
        let items = [];
        for(let i in this.props.items){
            const item = this.props.items[i];
            items.push(<TodoItem key={item.id} item={item} onComplete={this.props.onComplete} />)
        }
        return (
            <ul>
                {items}
            </ul>
        );
    }
}