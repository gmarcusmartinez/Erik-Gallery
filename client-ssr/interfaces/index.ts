export interface IPrint {
  _id: string;
  countInStock: number;
  description: string;
  image: string;
  price: number;
  size: string;
}

export interface ICartItem extends IPrint {
  quantity: number;
}