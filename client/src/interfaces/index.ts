export interface IAdmin {
  _id: string;
  email: string;
  role: 'admin';
}
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

export interface IBackground {
  _id: string;
  active: boolean;
  mainImage: string;
  type: string;
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
export interface IOrder {
  id: string;

  orderItems: ICartItem[];
  shippingAddress: IShippingAddress;

  paymentMethod: string;
  vatPrice: number;
  shippingPrice: number;
  totalPrice: number;

  isDelivered: boolean;
  isPaid: boolean;
  paidAt: Date;
  paymentResult: {
    id: string;
    status: string;
    update_time: string;
    email_address: string;
  };
  createdAt: Date;
}

export interface IPrint extends IProduct {}
export interface IZine extends IProduct {
  images: string[];
}

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface IOrder {}
