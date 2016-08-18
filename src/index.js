import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import TodoContainer from './containers/TodoContainer';
import TodoContainer_X from './containers/TodoContainer_X';
import { createStore } from 'redux';
import reducer from './reducers/todo';
import { addTodo } from './actions';
import { Provider } from 'react-redux';

let items = {
  1: { id: 1, title: 'AAA', status:'Completed'},
  2: { id: 2, title: 'BBB', status:'NotCompleted'},
  3: { id: 3, title: 'CCC', status:'NotCompleted'}
};

ReactDOM.render(
  <TodoContainer items={items} />,
  document.getElementById('root_react')
);

let store = createStore(reducer);
store.dispatch(addTodo('hehe'));
store.dispatch(addTodo('haha'));
store.dispatch(addTodo('heihei'));

ReactDOM.render(
  <Provider store={store}>
    <TodoContainer_X />
  </Provider>,
  document.getElementById('root_redux')
);
