import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateList,deleteToDo } from './listActions';

class List extends Component {
  
  toDoAdd = () => {
    
    if (this.refs.toDoName.value.trim() !== ''){   
        this.props.updateList(this.props.index, this.props.list.set('toDo', [...this.props.list.get('toDo'),this.refs.toDoName.value]));
        this.refs.toDoName.value = '';}
  }
  
  toDoDelete = (indexToDo) => {
    this.props.deleteToDo(this.props.index,indexToDo); 
  }


  render() {
    var name = this.props.list.get( 'nameList' );
    var toDo = this.props.list.get( 'toDo' );
    return(
      <div > 
        <dl>
            <dt>Список: {name}</dt>
            {toDo.map((item, index) => (
                <li>{item} - 
                <button onClick={() => this.toDoDelete(index)}>Сделано</button> </li>
            ))}
        </dl>
        <input type='text' placeholder='Надо сделать...' ref='toDoName'/>
        <button onClick={this.toDoAdd}>Добавить</button>
 
    </div> 
    );
  }
}

export default connect(null, {updateList,deleteToDo})(List);