import React, { Component } from 'react';
import ToDoList from './toDoList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import listReducer from './listReducer'
import ReactDOM from 'react-dom';

var store = createStore( listReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToDoList/>
      </Provider>
    );
  }
}

ReactDOM.render(
  <div>
    <App />    
  </div>
  ,
  document.getElementById('root')
);
export default App;
