import mongoose from "mongoose";

interface BackgroundDoc extends mongoose.Document {
  mainImage: string;
  active: boolean;
}

interface BackgroundAttrs {
  mainImage: string;
  active: boolean;
}

interface BackgroundModel extends mongoose.Model<BackgroundDoc> {
  build(attrs: BackgroundAttrs): BackgroundDoc;
}

const backgroundSchema = new mongoose.Schema({
  mainImage: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: false,
  },
  type: {
    type: String,
    default: "background",
  },
});

backgroundSchema.statics.build = (attrs: BackgroundAttrs) => {
  return new Background(attrs);
};

const Background = mongoose.model<BackgroundDoc, BackgroundModel>(
  "Background",
  backgroundSchema
);

export { Background };
