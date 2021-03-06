import mongoose from 'mongoose';

interface ProjectAttrs {
  title: string;
  description: string;
  medium: string;
  mainImage: string;
  images: string[];
  isPublished: boolean;
}

interface ProjectDoc extends mongoose.Document {
  title: string;
  description: string;
  medium: string;
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
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  medium: {
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
  type: {
    type: String,
    default: 'project',
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
