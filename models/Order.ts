import mongoose from "mongoose";

export enum OrderStatus {
  Created = "created",
  Canceled = "canceled",
  AwaitingPayment = "awaiting:payment",
  Complete = "complete",
}

interface OrderAttrs {
  userId: string;
  status: OrderStatus;
  expiresAt: Date;
}

interface OrderDoc extends mongoose.Document {
  userId: string;
  status: OrderStatus;
  expiresAt: Date;
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
    print: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Print",
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
