import React, { Component } from 'react';

export default class TodoFilter_X extends Component{
    constructor(props){
        super(props);
        this.setFilter = this.setFilter.bind(this);
    }
    setFilter(event){
        this.props.onSetFilter(event.target.value);
    }
    render() {
        return (
            <div>
                <label>状态：</label>
                <select onChange={this.setFilter}>
                    <option value='All'>全部</option>
                    <option value='NotCompleted'>未完成</option>
                    <option value='Completed'>已完成</option>
                </select>
            </div>
        );
    }
}