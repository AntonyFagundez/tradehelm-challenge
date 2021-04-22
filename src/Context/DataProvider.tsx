import React from "react";

import {Action, State} from "../types/State";

import reducer from "./reducer";

interface contextData {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const initialData: State = {
  data: [],
  isLoading: false,
  hasError: false,
  errorMessage: "",
};

const intialcontext: contextData = {
  state: initialData,
  dispatch: (_) => {
    return;
  },
};

export const DataContext = React.createContext<contextData>(intialcontext);

const DataProvider: React.FC = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialData);

  return <DataContext.Provider value={{state, dispatch}}>{children}</DataContext.Provider>;
};

export default DataProvider;
