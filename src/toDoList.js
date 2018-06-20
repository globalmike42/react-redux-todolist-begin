import React, {Component} from 'react';
import { connect } from 'react-redux';
import List from './list';
import {addList} from './listActions';

class ToDoList extends Component {
  
   createList = () => {
    if (this.refs.listName.value.trim() != ''){   
     this.props.addList(this.refs.listName.value);
     this.refs.listName.value = '';}
   }

  render() {
    return(
      <div>
        <input type='text' placeholder='Назовите список' ref='listName'/>
        <button onClick={this.createList}>Создать список дел</button>
        { <div>
            {this.props.lists.map((list, index) => (
              <List  
                key={index}
                index={index}
                list={list}
              />
            ))}
         </div> }
      </div>
    );
  }
}

 export default connect(
   state => ({
     lists: state
   }),
   {addList}
 )(ToDoList);