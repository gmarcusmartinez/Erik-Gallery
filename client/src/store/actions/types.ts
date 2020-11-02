export enum AuthActionTypes {
  USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST",
  USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE",

  GET_CURRENT_USER = "GET_CURRENT_USER",

  USER_LOGOUT_REQUEST = "USER_LOGOUT_REQUEST",
  USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS",
  USER_LOGOUT_FAILURE = "USER_LOGIN_FAILURE",
}

export enum PrintActionTypes {
  CREATE_PRINT_REQUEST = "CREATE_PRINT_REQUEST",
  CREATE_PRINT_SUCCESS = "CREATE_PRINT_SUCCESS",
  CREATE_PRINT_FAILURE = "CREATE_PRINT_FAILURE",

  FETCH_PRINTS_REQUEST = "FETCH_PRINTS_REQUEST",
  FETCH_PRINTS_SUCCESS = "FETCH_PRINTS_SUCCESS",
  FETCH_PRINTS_FAILURE = "FETCH_PRINTS_FAILURE",

  DELETE_PRINT_REQUEST = "DELETE_PRINT_REQUEST",
  DELETE_PRINT_SUCCESS = "DELETE_PRINT_SUCCESS",
  DELETE_PRINT_FAILURE = "DELETE_PRINT_FAILURE",
}
export enum CartActionTypes {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
  TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN",
}
export enum NavActionTypes {
  TOGGLE_NAV = "TOGGLE_NAV",
}

export enum ModalActionTypes {
  TOGGLE_MODAL = "TOGGLE_MODAL",
}
