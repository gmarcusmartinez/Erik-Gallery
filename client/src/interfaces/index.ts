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

  price: number;
  netPrice: number;
  vatPrice: number;
  isPublished: boolean;
}

export interface IPrint extends IProduct {
  description: string;
  size: string;
}

export interface IZine {
  _id: string;
  images: string[];
  description: string;
  mainImage: string;
  price: number;
  quantityInStock: number;
  title: string;
  type: string;
}

export interface ICartItem extends IPrint {
  quantity: number;
}
