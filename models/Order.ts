import mongoose from "mongoose";
import { ProductSubDoc } from "./Product";

interface OrderAttrs {
  orderItems: ProductSubDoc[];
  shippingAddress: {
    email: string;
    name: string;
    address: string;
    city: string;
    country: string;
    postalCode: number;
  };
  paymentMethod: string;
  itemsPrice: number;
  vatPrice: number;
  shippingPrice: number;
  totalPrice: number;
}

interface OrderModel extends mongoose.Model<OrderDoc> {
  build(attrs: OrderAttrs): OrderDoc;
}

export interface OrderDoc extends mongoose.Document {
  orderItems: ProductSubDoc[];
  shippingAddress: {
    email: string;
    name: string;
    address: string;
    city: string;
    country: string;
    postalCode: number;
  };
  paymentMethod: string;
  vatPrice: number;
  shippingPrice: number;
  totalPrice: number;

  isPaid: boolean;
  paidAt: Date;
  paymentResult: {
    id: string;
    status: string;
    update_time: string;
    email_address: string;
  };
}

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        _id: { type: mongoose.Schema.Types.ObjectId, required: true },
        title: { type: String },
        description: { type: String },
        mainImage: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    shippingAddress: {
      email: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    vatPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },

  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

orderSchema.statics.build = (attrs: OrderAttrs) => {
  return new Order(attrs);
};

const Order = mongoose.model<OrderDoc, OrderModel>("Order", orderSchema);

export { Order };
