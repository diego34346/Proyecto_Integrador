import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
				allCharacters: [...state.allCharacters, action.payload],
      };

    case FILTER:
      const allCharFilter = state.allCharacters.filter(
        (char) => char.gender === action.payload)
      return action.payload === "All"
        ? { ...state, myFavorites: [...state.allCharacters] }
        : { ...state, myFavorites: allCharFilter };

    case ORDER:
      const allCharOrder = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharOrder.sort((a, b) => a.id - b.id)
            : allCharOrder.sort((a, b) => b.id - a.id),
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload),
        allCharacters: state.allCharacters.filter((char) => char.id !== action.payload),
        
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
