export interface IAdmin {
  _id: string;
  email: string;
  role: 'admin';
}
export interface IBackground {
  _id: string;
  active: boolean;
  mainImage: string;
  type: string;
}

export interface IError {
  message: string;
  field?: string;
}

export interface IPrint {
  _id: string;
  description: string;
  isPublished: boolean;
  mainImage: string;
  quantityInStock: number;
  type: 'print';
  size: string;

  price: number;
  netPrice: number;
  vatPrice: number;
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
