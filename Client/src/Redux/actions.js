// import axios from "axios";
export const ADD_CHARACTER = "ADD_CHARACTER"
export const REMOVE_CHARACTER = "REMOVE_CHARACTER"
export const RESET_FILTERS = "RESET_FILTERS"
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export const addCharacter = (character) => {
  return {
    type: ADD_CHARACTER,
    payload: character,
  };
}

export const removeCharacter = (id) => {
  return {
    type: REMOVE_CHARACTER,
    payload: id,
  };
}

export const addFav = (character) => {
  return { type: ADD_FAV, payload: character };
};

// export const addFav = (character) => {
//   const endpoint = 'http://localhost:3001/rickandmorty/fav';
//   return (dispatch) => {
//      axios.post(endpoint, character).then(({ data }) => {
//         return dispatch({
//            type: ADD_FAV,
//            payload: data,
//         });
//      });
//   };
// };

export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};

// export const removeFav = (id) => {
//   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//   return (dispatch) => {
//      axios.delete(endpoint).then(({ data }) => {
//         return dispatch({
//            type: REMOVE_FAV,
//            payload: data,
//      });
//      });
//   };
// };

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
}

export const orderCards = (A, D) => {
  return { type: ORDER, payload: A, D }
}

export function resetFilters() {
  return { type: RESET_FILTERS, };
}
