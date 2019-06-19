export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO_LIST";

export const toggleTodoList = index => {
  return {
    type: TOGGLE_TODO,
    payload: index
  };
};

export const addNewTodo = newTodo => {
  return {
    type: ADD_NEW_TODO,
    payload: newTodo
  };
};
