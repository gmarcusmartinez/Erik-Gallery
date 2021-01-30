import mongoose from 'mongoose';

interface ProjectAttrs {
  title: string;
  description: string;
  mainImage: string;
  images: string[];
  isPublished: boolean;
}

interface ProjectDoc extends mongoose.Document {
  title: string;
  description: string;
  mainImage: string;
  images: string[];
  isPublished: boolean;
}

interface ProjectModel extends mongoose.Model<ProjectDoc> {
  build(attrs: ProjectAttrs): ProjectDoc;
}

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  mainImage: {
    type: String,
    required: true,
  },
  images: [String],
  isPublished: {
    type: Boolean,
    default: false,
  },
});

projectSchema.statics.build = (attrs: ProjectAttrs) => {
  return new Project(attrs);
};

const Project = mongoose.model<ProjectDoc, ProjectModel>(
  'Project',
  projectSchema
);

export { Project };
