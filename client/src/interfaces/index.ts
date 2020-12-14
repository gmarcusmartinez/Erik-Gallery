export interface IUser {
  _id: string;
  email: string;
  role: string;
}

export interface IError {
  message: string;
  field?: string;
}

export interface IShippingAddress {
  email: string;
  name: string;
  address: string;
  country: string;
  city: string;
  postalCode: string;
}
export interface IProduct {
  _id: string;
  mainImage: string;
  quantityInStock: number;
  type: string;

  title?: string;
  description?: string;
  size?: string;
  isPublished: boolean;

  price: number;
  netPrice: number;
  vatPrice: number;
}

export interface IPrint extends IProduct {}
export interface IZine extends IProduct {
  images: string[];
}

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface IOrder {}
