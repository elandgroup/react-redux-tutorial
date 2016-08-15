import React, { Component } from 'react';

export default class TodoItem extends Component{
    constructor(props){
        super(props);
        this.complete = this.complete.bind(this);
    }
    complete(event){
        //alert(event.target.getAttribute('data-id'));
        this.props.onComplete(event.target.getAttribute('data-id'))
    }
    render() {
        let statusElement = <span>
                                <span style={{color: 'red'}}>[未完成]</span>
                                <button data-id={this.props.item.id} onClick={this.complete}>标记为已完成</button>
                            </span>;
        if(this.props.item.status == 'Completed'){
            statusElement = <span style={{color: 'green'}}>[已完成]</span>;
        }
        return (
            <li>
                {this.props.item.title}{statusElement}
            </li>
        );
    }
}