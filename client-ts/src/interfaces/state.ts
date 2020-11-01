import { IPrint } from "interfaces";

export interface IPrintsState {
  loading: boolean;
  items: IPrint[];
}
interface IModalState {
  bool: false;
  component: null;
  data: null;
}

export interface IState {
  prints: IPrintsState;
  modal: IModalState;
  nav: {
    open: boolean;
  };
}
