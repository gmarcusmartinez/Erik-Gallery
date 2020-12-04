export interface IUser {
  _id: string;
  email: string;
  role: string;
}

export interface IPrint {
  _id: string;
  mainImage: string;
  description: string;
  size: string;
  price: string;
  quantityInStock: number;
}
export interface IError {
  message: string;
  field?: string;
}

export interface ICartItem extends IPrint {
  quantity: number;
}
export interface IShippingInfo {
  email: string;
  name: string;
  address: string;
  country: string;
  city: string;
  postalCode: string;
}
