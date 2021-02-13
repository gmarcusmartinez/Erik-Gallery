export interface IAdmin {
  _id: string;
  email: string;
  role: 'admin';
}
export interface IBackground {
  _id: string;
  active: boolean;
  mainImage: string;
  type: 'background';
}
export interface IBio {
  _id: string;
  text: string;
}

export interface IError {
  message: string;
  field?: string;
}

export interface IPrint {
  _id: string;
  description: string;
  isPublished: boolean;
  isAvailable: boolean;
  mainImage: string;
  type: 'print';
  size: string;
}

export interface IProject {
  _id: string;
  title: string;
  description?: string;
  medium?: string;
  mainImage: string;
  images: [string] | [];
  isPublished: boolean;
  type: 'project';
}

export type ResourceType = IPrint | IProject | IBio | IBackground;
