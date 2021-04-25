import {Item} from "./Item";

export interface State {
  data: Item[];
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
}

export type Action = {type: string; payload: string} | {type: string; payload: Item};

export type Reducer<S, A> = (prevState: S, action: A) => S;
