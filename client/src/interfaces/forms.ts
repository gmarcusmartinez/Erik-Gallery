export interface IPrintForm {
  description: string;
  size: string;
  price: number;
  quantityInStock: number;
  isPublished: boolean;
  mainImage: string;
}

export interface IBioForm {
  text: string;
}

export interface IProjectForm {
  title: string;
  description: string;
  medium: string;
  mainImage: string;
  isPublished: boolean;
}
