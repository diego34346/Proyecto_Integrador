import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  ADD_CHARACTER,
  REMOVE_CHARACTER,
  RESET_FILTERS,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from "./actions";

const initialState = {
  allCharacters: [],
  myFavorites: [],
  filterCharacters: [],
  notification: {
    message: "",
    type: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_CHARACTER:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(
          (element) => parseInt(element.id) !== parseInt(action.payload)
        ),
      };

    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        filterCharacters: action.payload,
      };

    case REMOVE_FAV:
      return { ...state, 
        myFavorites: action.payload,  
        filterCharacters: action.payload};

    case FILTER:
      return {
        ...state,
        filterCharacters: state.myFavorites.filter(
          (char) => char.gender === action.payload
        ),
      };

    case ORDER:
      const allCharOrder = [...state.filterCharacters];
      return {
        ...state,
        filterCharacters:
          action.payload === "A"
            ? allCharOrder.sort((a, b) => a.id - b.id)
            : allCharOrder.sort((a, b) => b.id - a.id),
      };

    case RESET_FILTERS:
      return {
        ...state,
        filterCharacters: [...state.myFavorites],
      };

    case SHOW_NOTIFICATION:
      return {
        ...state,
        notification: action.payload,
      };

    case HIDE_NOTIFICATION:
      return {
        ...state,
        notification: initialState.notification,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
