import React, { Component } from 'react';

export default class TodoCreator extends Component{
    constructor(props){
        super(props);
        this.state = { title: '' };
        this.titleChange = this.titleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    titleChange(event){
        this.setState({ title: event.target.value });
    }
    addTodo(){
        this.props.onAddTodo(this.state.title);
        this.setState({ title: '' });
    }
    render() {
        return (
            <div>
                <input onChange={this.titleChange} value={this.state.title} />
                <button onClick={this.addTodo}>添加</button>
            </div>
        );
    }
}