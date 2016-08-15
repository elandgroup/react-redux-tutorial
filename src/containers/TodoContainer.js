import React, { Component } from 'react';
import TodoFilter from '../components/TodoFilter';
import TodoList from '../components/TodoList';
import TodoCreator from '../components/TodoCreator';

export default class TodoContainer extends Component{
    constructor(props){
        super(props);
        this.state = { status: 'All', items: this.props.items };
        this.addTodo = this.addTodo.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.complete = this.complete.bind(this);
    }
    addTodo(title){
        const id = Object.getOwnPropertyNames(this.state.items).length + 1;
        const item = { id: id, title: title, status: 'NotCompleted' }
        let items = Object.assign({}, this.state.items, { [id]: item });
        this.setState({ items: items });
    }
    changeStatus(status){
        this.setState({ status: status });
    }
    complete(id){
        var items= this.state.items;
        for(var i in items){
            var item = items[i];
            if(item.id == id){
                item.status = 'Completed';
                break;
            }
        }
        this.setState({ items: items });
    }
    render() {
        let items = {};
        if(this.state.status === 'All'){
            items = this.state.items;
        }else{
            for(let i in this.state.items){
                const item = this.state.items[i];
                if(item.status === this.state.status){
                    items[item.id] = item;
                }
            }
        }
        return (
            <div>
                <TodoFilter onChangeStatus={this.changeStatus} />
                <TodoList items={items}  onComplete={this.complete} />
                <TodoCreator onAddTodo={this.addTodo} />
            </div>
        );
    }
}