import { IPrint } from "./";

interface IPrintsState {
  loading: boolean;
  items: IPrint[];
}

interface IModalState {
  displayModal: boolean;
  component: string;
  data: IPrint;
}

export interface IState {
  prints: IPrintsState;
  modal: IModalState;
  nav: {
    open: boolean;
  };
}
