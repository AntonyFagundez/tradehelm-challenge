import {v1 as uuidV1} from "uuid";

import {State, Action} from ".././types/State";
import {Item} from ".././types/Item";

const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        data: [...state.data, {...(action.payload as Item), id: uuidV1()}],
      };
    }

    case DELETE_ITEM: {
      return {
        ...state,
        data: state.data.filter((x) => x.id !== action.payload),
      };
    }

    default: {
      return state;
    }
  }
}

export const addItem = (item: Item): Action => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const deleteItem = (id: string): Action => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};
