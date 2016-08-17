import React, { Component } from 'react';
import TodoItem_X from '../components/TodoItem_X';

export default class TodoList extends Component{
    render() {
        let { items, onComplete } = this.props;
        let eleItems = [];
        for(let i in items){
            const item = items[i];
            eleItems.push(<TodoItem_X key={item.id} item={item} onComplete={(id) => onComplete(id)} />)
        }
        return (
            <ul>
                {eleItems}
            </ul>
        );
    }
}