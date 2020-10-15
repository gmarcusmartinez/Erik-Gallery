import mongoose from "mongoose";

interface PrintDoc extends mongoose.Document {
  description: string;
  image: string;
  size: string;
  price: number;
  countInStock: number;
}

interface PrintAttrs {
  description: string;
  image: string;
  size: string;
  price: number;
  countInStock: number;
}

interface PrintModel extends mongoose.Model<PrintDoc> {
  build(attrs: PrintAttrs): PrintDoc;
}

const printSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  countInStock: {
    type: String,
    required: true,
  },
});

printSchema.statics.build = (attrs: PrintAttrs) => {
  return new Print(attrs);
};

const Print = mongoose.model<PrintDoc, PrintModel>("Print", printSchema);

export { Print };