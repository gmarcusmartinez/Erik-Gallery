import mongoose from "mongoose";

export enum ProductType {
  Print = "print",
  Zine = "zine",
}

export interface ProductSubDoc {
  _id: string;
  title: string;
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
  quantityInStock: number;
  isPublished: boolean;
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
    type: String,
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
  const { _id, title, mainImage, price } = this;
  return { _id, title, mainImage, price };
};

const Product = mongoose.model<ProductDoc, ProductModel>(
  "Product",
  productSchema
);

export { Product };
