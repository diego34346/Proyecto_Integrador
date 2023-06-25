import axios from "axios";
export const ADD_CHARACTER = "ADD_CHARACTER"
export const REMOVE_CHARACTER = "REMOVE_CHARACTER"
export const RESET_FILTERS = "RESET_FILTERS"
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

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
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      
    }
  };
};

export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data
      });
    } catch (error) {
    
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
}

export const orderCards = (A, D) => {
  return { type: ORDER, payload: A, D }
}

export function resetFilters() {
  return { type: RESET_FILTERS, };
}

export function showNotificacion(notification) {
  return {
    type: SHOW_NOTIFICATION,
    payload: notification
  };
}

export function hideNotificacion() {
  return {
    type: HIDE_NOTIFICATION,
  };
}
