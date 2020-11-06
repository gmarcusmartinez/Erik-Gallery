import mongoose from "mongoose";

interface BackgroundDoc extends mongoose.Document {
  image: string;
  active: boolean;
}

interface BackgroundAttrs {
  image: string;
  active: boolean;
}

interface BackgroundModel extends mongoose.Model<BackgroundDoc> {
  build(attrs: BackgroundAttrs): BackgroundDoc;
}

const backgroundSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: false,
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
