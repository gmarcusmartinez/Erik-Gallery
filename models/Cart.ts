import mongoose from "mongoose";
import { ProductSubDoc } from "./Product";

interface CartAttrs {
  items: ProductSubDoc[];
}

interface CartModel extends mongoose.Model<CartDoc> {
  build(attrs: CartAttrs): CartDoc;
}

export interface CartDoc extends mongoose.Document {
  items: ProductSubDoc[];
  // expiration: Date;
}

const cartSchema = new mongoose.Schema(
  {
    items: [
      {
        _id: String,
        title: String || null,
        mainImage: String,
        price: Number,
        quantity: Number,
      },
    ],
    // expiration: {
    //   type: Date,
    //   required: true,
    // },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

cartSchema.statics.build = (attrs: CartAttrs) => {
  return new Cart(attrs);
};

const Cart = mongoose.model<CartDoc, CartModel>("Cart", cartSchema);

export { Cart };
