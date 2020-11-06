import mongoose from "mongoose";

export enum ProductType {
  Print = "print",
}

interface ProductDoc extends mongoose.Document {
  title: string;
  description: string;
  mainImage: string;
  images: string[];
  type: ProductType;
  size: string;
  price: number;
  inStock: number;
}

interface ProductAttrs {
  title: string;
  description: string;
  mainImage: string;
  images: string[];
  type: ProductType;
  size: string;
  price: number;
  inStock: number;
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
});

productSchema.statics.build = (attrs: ProductAttrs) => {
  return new Product(attrs);
};

const Product = mongoose.model<ProductDoc, ProductModel>(
  "Product",
  productSchema
);

export { Product };
