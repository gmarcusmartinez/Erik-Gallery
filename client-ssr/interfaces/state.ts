import { IPrint } from "interfaces";

export interface IPrintsState {
  loading: boolean;
  items: IPrint[];
}

export interface IState {
  prints: IPrintsState;
  nav: {
    open: boolean;
  };
}
