import Immutable from 'immutable';

var initialState =  Immutable.fromJS([
    
])

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_LIST':
      var newList = Immutable.Map({
        nameList: action.payload.name,
        toDo: []
      })
      return  state.push(newList);
    case 'UPDATE':
      return state.set(action.payload.index, action.payload.toDo);
    case 'DELETE_TODO':
         
       return state.setIn([action.payload.index,'toDo'], state.getIn([action.payload.index,'toDo']).filter((element,index) => index !== action.payload.toDoItem));
    default:
        return state    
          
  }
}