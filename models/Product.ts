import mongoose from 'mongoose';

export enum ProductType {
  Print = 'print',
  Project = 'project',
}

export interface ProductSubDoc {
  _id: string;
  title: string;
  description: string;
  mainImage: string;
  price: number;
  quantity: number;
}

interface ProductAttrs {
  title: string;
  description: string;
  mainImage: string;
  images: string[];
  type: ProductType;
  size: string;
  price: number;
  quantityInStock: number;
  isPublished: boolean;
}

interface ProductDoc extends mongoose.Document {
  title: string;
  description: string;
  mainImage: string;
  images: string[];
  type: ProductType;
  size: string;
  price: number;
  vatPrice: number;
  netPrice: number;
  quantityInStock: number;
  isPublished: boolean;
  calculateVat(): number;
  calculateNet(): number;
  createSubDoc(): ProductSubDoc;
}

interface ProductModel extends mongoose.Model<ProductDoc> {
  build(attrs: ProductAttrs): ProductDoc;
}

const productSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  mainImage: {
    type: String,
    required: true,
  },
  images: [String],
  size: {
    type: String,
  },
  type: {
    type: String,
    required: true,
    enum: Object.values(ProductType),
  },
  price: {
    type: Number,
    required: true,
  },
  vatPrice: {
    type: Number,
    required: true,
  },
  netPrice: {
    type: Number,
    required: true,
  },
  quantityInStock: {
    type: Number,
    required: true,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
});

productSchema.statics.build = (attrs: ProductAttrs) => {
  return new Product(attrs);
};

productSchema.methods.createSubDoc = function () {
  const { _id, title, description, mainImage, price } = this;
  return { _id, title, description, mainImage, price };
};

productSchema.methods.calculateVat = function () {
  const vatRate = 0.16;
  const { price } = this;
  return price * vatRate;
};

productSchema.methods.calculateNet = function () {
  const vatRate = 0.16;
  const { price } = this;
  return price - price * vatRate;
};

const Product = mongoose.model<ProductDoc, ProductModel>(
  'Product',
  productSchema
);

export { Product };
