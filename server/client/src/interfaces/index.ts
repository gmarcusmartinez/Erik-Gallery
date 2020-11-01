export interface IUser {
  _id: string;
  email: string;
  role: string;
}

export interface IPrint {
  _id: string;
  inStock: boolean;
  description: string;
  image: string;
  price: number;
  size: string;
}
export interface IError {
  message: string;
  field?: string;
}

export interface ICartItem extends IPrint {
  quantity: number;
}
