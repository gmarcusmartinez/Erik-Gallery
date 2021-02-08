import mongoose from 'mongoose';

interface BioDoc extends mongoose.Document {
  text: string;
}

interface BioAttrs {
  text: string;
}

interface BioModel extends mongoose.Model<BioDoc> {
  build(attrs: BioAttrs): BioDoc;
}

const bioSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

bioSchema.statics.build = (attrs: BioAttrs) => {
  return new Bio(attrs);
};

const Bio = mongoose.model<BioDoc, BioModel>('Bio', bioSchema);

export { Bio };
