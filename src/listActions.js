export function addList(nameList) {
  return {type: 'ADD_LIST', payload: {name: nameList}}
}

export function updateList(indexList, todoList) {
  return {type: 'UPDATE', payload: {index: indexList, toDo: todoList }}
}

export function deleteToDo(indexList, toDoOne) {
  return {type: 'DELETE_TODO', payload: {index: indexList, toDoItem: toDoOne }}
}