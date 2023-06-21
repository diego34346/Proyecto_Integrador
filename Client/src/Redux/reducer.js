import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  ADD_CHARACTER,
  REMOVE_CHARACTER,
  RESET_FILTERS,
} from "./actions";

const initialState = {
  allCharacters: [],
  myFavorites: [],
  filterCharacters: [],
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
        filterCharacters: [...state.filterCharacters, action.payload],
        myFavorites: [...state.myFavorites, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
        filterCharacters: state.filterCharacters.filter(
          (char) => char.id !== action.payload
        ),
      };

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

    default:
      return { ...state };
  }
};

export default rootReducer;
