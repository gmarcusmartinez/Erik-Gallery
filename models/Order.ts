import mongoose from "mongoose";
import { ProductSubDoc } from "./Product";

export enum OrderStatus {
  Created = "created",
  Canceled = "canceled",
  AwaitingPayment = "awaiting:payment",
  Complete = "complete",
}

interface OrderAttrs {
  status: OrderStatus;
  expiresAt: Date;
  product: ProductSubDoc;
}

interface OrderDoc extends mongoose.Document {
  status: OrderStatus;
  expiresAt: Date;
  product: ProductSubDoc;
}

interface OrderModel extends mongoose.Model<OrderDoc> {
  build(attrs: OrderAttrs): OrderDoc;
}

const orderSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      enum: Object.values(OrderStatus),
      default: OrderStatus.Created,
    },
    expiresAt: {
      type: mongoose.Schema.Types.Date,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

orderSchema.statics.build = (attrs: OrderAttrs) => new Order(attrs);

const Order = mongoose.model<OrderDoc, OrderModel>("Order", orderSchema);

export { Order };
