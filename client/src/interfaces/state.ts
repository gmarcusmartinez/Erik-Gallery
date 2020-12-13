import { IZine, IError } from "./";

export interface IZineState {
  loading: boolean;
  items: IZine[] | [];
  page: number;
  pages: number;
  selectedItem: IZine;
  errors: IError[] | [];
}

export interface IState {
  zines: IZineState;
}
