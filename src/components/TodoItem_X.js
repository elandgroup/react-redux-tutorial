import React, { Component } from 'react';

export default class TodoItem_X extends Component{
    constructor(props){
        super(props);
        this.complete = this.complete.bind(this);
    }
    complete(id){
        this.props.onComplete(id);
    }
    render() {
        let { item } = this.props;
        let statusElement = <span>
                                <span style={{color: 'red'}}>[未完成]</span>
                                <button onClick={() => this.complete(item.id)}>标记为已完成</button>
                            </span>;
        if(item.status == 'Completed'){
            statusElement = <span style={{color: 'green'}}>[已完成]</span>;
        }
        return (
            <li>
                {item.title}{statusElement}
            </li>
        );
    }
}