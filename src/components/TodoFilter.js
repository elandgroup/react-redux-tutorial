import React, { Component } from 'react';

export default class TodoItem extends Component{
    constructor(props){
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
    }
    changeStatus(event){
        this.props.onChangeStatus(event.target.value);
    }
    render() {
        return (
            <div>
                <label>状态：</label>
                <select onChange={this.changeStatus}>
                    <option value='All'>全部</option>
                    <option value='NotCompleted'>未完成</option>
                    <option value='Completed'>已完成</option>
                </select>
            </div>
        );
    }
}