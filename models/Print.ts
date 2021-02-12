import mongoose from 'mongoose';

interface PrintAttrs {
  description: string;
  mainImage: string;
  type: string;
  size: string;
  isAvailable: boolean;
  isPublished: boolean;
}

interface PrintDoc extends mongoose.Document {
  description: string;
  mainImage: string;
  type: string;
  size: string;
  isAvailable: boolean;
  isPublished: boolean;
}

interface PrintModel extends mongoose.Model<PrintDoc> {
  build(attrs: PrintAttrs): PrintDoc;
}

const printSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'print',
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
});

printSchema.statics.build = (attrs: PrintAttrs) => {
  return new Print(attrs);
};

const Print = mongoose.model<PrintDoc, PrintModel>('Print', printSchema);

export { Print };
