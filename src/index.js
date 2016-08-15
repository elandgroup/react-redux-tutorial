import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import TodoContainer from './containers/TodoContainer';

let items = {
  1: { id: 1, title: 'AAA', status:'Completed'},
  2: { id: 2, title: 'BBB', status:'NotCompleted'},
  3: { id: 3, title: 'CCC', status:'NotCompleted'}
};

ReactDOM.render(
  <TodoContainer items={items} />,
  document.getElementById('root')
);
