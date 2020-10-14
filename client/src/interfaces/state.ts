import { IPrint } from "interfaces";

export interface IState {
  prints: {
    loading: boolean;
    prints: IPrint[];
  };
}
