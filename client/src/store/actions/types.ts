export enum AuthActionTypes {
  USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST",
  USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE",

  GET_CURRENT_USER = "GET_CURRENT_USER",

  USER_LOGOUT_REQUEST = "USER_LOGOUT_REQUEST",
  USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS",
  USER_LOGOUT_FAILURE = "USER_LOGIN_FAILURE",
}

export enum BackgroundActionTypes {
  CREATE_BACKGROUND_REQUEST = "CREATE_BACKGROUND_REQUEST",
  CREATE_BACKGROUND_SUCCESS = "CREATE_BACKGROUND_SUCCESS",
  CREATE_BACKGROUND_FAILURE = "CREATE_BACKGROUND_FAILURE",

  FETCH_BACKGROUNDS_REQUEST = "FETCH_BACKGROUNDS_REQUEST",
  FETCH_BACKGROUNDS_SUCCESS = "FETCH_BACKGROUNDS_SUCCESS",
  FETCH_BACKGROUNDS_FAILURE = "FETCH_BACKGROUNDS_FAILURE",

  SET_ACTIVE_REQUEST = "SET_ACTIVE_REQUEST",
  SET_ACTIVE_SUCCESS = "SET_ACTIVE_SUCCESS",
  SET_ACTIVE_FAILURE = "SET_ACTIVE_FAILURE",

  FETCH_ACTIVE_BG = "FETCH_ACTIVE_BG",

  DELETE_BACKGROUND_REQUEST = "DELETE_BACKGROUND_REQUEST",
  DELETE_BACKGROUND_SUCCESS = "DELETE_BACKGROUND_SUCCESS",
  DELETE_BACKGROUND_FAILURE = "DELETE_BACKGROUND_FAILURE",
}

export enum CartActionTypes {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART",

  CLEAR_CART = "CLEAR_CART",
  TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN",

  UPDATE_SHIPPING_ADDRESS = "UPDATE_SHIPPING_ADDRESS",
  UPDATE_PAYMENT_METHOD = "UPDATE_PAYMENT_METHOD",
}

export enum ModalActionTypes {
  TOGGLE_MODAL = "TOGGLE_MODAL",
}

export enum NavActionTypes {
  TOGGLE_NAV = "TOGGLE_NAV",
}
export enum LightboxActionTypes {
  SET_DISPLAY_LIGHTBOX = "SET_DISPLAY_LIGHTBOX",
}

export enum OrdertActionTypes {
  CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST",
  CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS",
  CREATE_ORDER_FAILURE = "CREATE_ORDER_FAILURE",

  PAY_ORDER_REQUEST = "PAY_ORDER_REQUEST",
  PAY_ORDER_SUCCESS = "PAY_ORDER_SUCCESS",
  PAY_ORDER_FAILURE = "PAY_ORDER_FAILURE",
  PAY_ORDER_RESET = "PAY_ORDER_RESET",
}

export enum AdminOrdertActionTypes {
  ADMIN_GET_ORDER_REQUEST = "ADMIN_GET_ORDER_REQUEST",
  ADMIN_GET_ORDER_SUCCESS = "ADMIN_GET_ORDER_SUCCESS",
  ADMIN_GET_ORDER_FAILURE = "ADMIN_GET_ORDER_FAILURE",

  GET_ORDERS_REQUEST = "GET_ORDERS_REQUEST",
  GET_ORDERS_SUCCESS = "GET_ORDERS_SUCCESS",
  GET_ORDERS_FAILURE = "GET_ORDERS_FAILURE",
}

export enum PrintActionTypes {
  ADMIN_FETCH_PRINTS_REQUEST = "ADMIN_FETCH_PRINTS_REQUEST",
  ADMIN_FETCH_PRINTS_SUCCESS = "ADMIN_FETCH_PRINTS_SUCCESS",
  ADMIN_FETCH_PRINTS_FAILURE = "ADMIN_FETCH_PRINTS_FAILURE",

  CREATE_PRINT_REQUEST = "CREATE_PRINT_REQUEST",
  CREATE_PRINT_SUCCESS = "CREATE_PRINT_SUCCESS",
  CREATE_PRINT_FAILURE = "CREATE_PRINT_FAILURE",

  FETCH_PRINTS_REQUEST = "FETCH_PRINTS_REQUEST",
  FETCH_PRINTS_SUCCESS = "FETCH_PRINTS_SUCCESS",
  FETCH_PRINTS_FAILURE = "FETCH_PRINTS_FAILURE",

  FETCH_PRINT_REQUEST = "FETCH_PRINT_REQUEST",
  FETCH_PRINT_SUCCESS = "FETCH_PRINT_SUCCESS",
  FETCH_PRINT_FAILURE = "FETCH_PRINT_FAILURE",

  UPDATE_PRINT_REQUEST = "UPDATE_PRINT_REQUEST",
  UPDATE_PRINT_SUCCESS = "UPDATE_PRINT_SUCCESS",
  UPDATE_PRINT_FAILURE = "UPDATE_PRINT_FAILURE",

  DELETE_PRINT_REQUEST = "DELETE_PRINT_REQUEST",
  DELETE_PRINT_SUCCESS = "DELETE_PRINT_SUCCESS",
  DELETE_PRINT_FAILURE = "DELETE_PRINT_FAILURE",
}

export enum UploadActionTypes {
  UPLOAD_REQUEST = "UPLOAD_REQUEST",
  UPLOAD_SUCCESS = "UPLOAD_SUCCESS",
  UPLOAD_FAILURE = "UPLOAD_FAILURE",
}

export enum ZineActionTypes {
  ADMIN_FETCH_ZINES_REQUEST = "ADMIN_FETCH_ZINES_REQUEST",
  ADMIN_FETCH_ZINES_SUCCESS = "ADMIN_FETCH_ZINES_SUCCESS",
  ADMIN_FETCH_ZINES_FAILURE = "ADMIN_FETCH_ZINES_FAILURE",

  ADD_ZINE_IMG_REQUEST = "ADD_ZINE_IMG_REQUEST",
  ADD_ZINE_IMG_SUCCESS = "ADD_ZINE_IMG_SUCCESS",
  ADD_ZINE_IMG_FAILURE = "ADD_ZINE_IMG_FAILURE",

  DELETE_ZINE_PAGE_REQUEST = "DELETE_ZINE_PAGE_REQUEST",
  DELETE_ZINE_PAGE_SUCCESS = "DELETE_ZINE_PAGE_SUCCESS",
  DELETE_ZINE_PAGE_FAILURE = "DELETE_ZINE_PAGE_FAILURE",

  CREATE_ZINE_REQUEST = "CREATE_ZINE_REQUEST",
  CREATE_ZINE_SUCCESS = "CREATE_ZINE_SUCCESS",
  CREATE_ZINE_FAILURE = "CREATE_ZINE_FAILURE",

  FETCH_ZINES_REQUEST = "FETCH_ZINES_REQUEST",
  FETCH_ZINES_SUCCESS = "FETCH_ZINES_SUCCESS",
  FETCH_ZINES_FAILURE = "FETCH_ZINES_FAILURE",

  FETCH_ZINE_REQUEST = "FETCH_ZINE_REQUEST",
  FETCH_ZINE_SUCCESS = "FETCH_ZINE_SUCCESS",
  FETCH_ZINE_FAILURE = "FETCH_ZINE_FAILURE",

  UPDATE_ZINE_REQUEST = "UPDATE_ZINE_REQUEST",
  UPDATE_ZINE_SUCCESS = "UPDATE_ZINE_SUCCESS",
  UPDATE_ZINE_FAILURE = "UPDATE_ZINE_FAILURE",

  DELETE_ZINE_REQUEST = "DELETE_ZINE_REQUEST",
  DELETE_ZINE_SUCCESS = "DELETE_ZINE_SUCCESS",
  DELETE_ZINE_FAILURE = "DELETE_ZINE_FAILURE",
}
