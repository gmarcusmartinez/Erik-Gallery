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

export interface IBackground {
  _id: string;
  active: boolean;
  mainImage: string;
  type: string;
}
export interface IProject {
  _id: string;
  title: string;
  description?: string;
  medium?: string;
  mainImage: string;
  images: [string] | [];
  isPublished: boolean;
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

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface IOrder {}
