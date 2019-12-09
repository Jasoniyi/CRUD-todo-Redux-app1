import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SHOW_ALL,
  SET_VISIBILITY_FILTER
} from "../action";

import INITIAL_DATA from "../initialData";

import { combineReducers } from "redux";

const TodoReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default combineReducers({
  TodoReducer,
  visibilityFilter
});
