import React from "react";

import {Action, State} from "../types/State";

import reducer, {resetLoading} from "./reducer";

interface contextData {
  state: State;
  dispatch: React.Dispatch<Action>;
}

interface DataProviderProps {
  initialState?: State;
}

const initialData: State =
  localStorage.getItem("state") !== null
    ? (JSON.parse(localStorage.getItem("state") as string) as State)
    : {
        data: [],
        isLoading: true,
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

const DataProvider: React.FC<DataProviderProps> = ({children, initialState = initialData}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const memoizedState: State = React.useMemo(() => state, [state]);

  React.useEffect(() => {
    localStorage.setItem("state", JSON.stringify(memoizedState));
  }, [memoizedState]);

  React.useEffect(() => {
    let fn: NodeJS.Timeout;

    if (state.isLoading) {
      fn = setTimeout(() => dispatch(resetLoading()), 600);
    }

    return () => clearTimeout(fn);
  }, [state.isLoading]);

  return (
    <DataContext.Provider value={{state: memoizedState, dispatch}}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
