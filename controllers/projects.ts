import { Request, Response } from 'express';
import { BadRequestError } from '../errors/bad-request-error';
import { asyncHandler } from '../middlewares/async';
import { Project } from '../models/Project';

export const getProjects = asyncHandler(async (req: Request, res: any) => {
  res.status(200).json(res.advancedResults);
});

export const adminGetProjects = asyncHandler(
  async (req: Request, res: Response) => {
    const projects = await Project.find();
    res.send(projects);
  }
);
export const adminGetProject = asyncHandler(
  async (req: Request, res: Response) => {
    const project = await Project.findById(req.params.id);
    if (!project) throw new BadRequestError('Project not found.');
    res.status(200).json(project);
  }
);

export const getProject = asyncHandler(async (req: Request, res: Response) => {
  const project = await Project.findById(req.params.id);
  if (!project) throw new BadRequestError('Project not found.');
  if (!project.isPublished) throw new BadRequestError('Project not found.');
  res.status(200).json(project);
});

export const createProject = asyncHandler(
  async (req: Request, res: Response) => {
    const project = Project.build({ ...req.body });
    await project.save();
    res.status(200).json(project);
  }
);

export const updateProject = asyncHandler(
  async (req: Request, res: Response) => {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!project) throw new BadRequestError('Project Not Found.');
    await project.save();

    res.status(200).json(project);
  }
);

export const addProjectImage = asyncHandler(
  async (req: Request, res: Response) => {
    const project = await Project.findById(req.params.id);
    if (!project) throw new BadRequestError('Project Not Found.');

    project.images.push(req.body.image);
    await project.save();

    res.status(200).json(project);
  }
);

export const updateProjectImages = async (req: Request, res: Response) => {
  const project = await Project.findById(req.params.id);
  if (!project) throw new BadRequestError('Project Not Found.');
  project.images = req.body;
  await project.save();
  res.status(200).json(project);
};

export const deleteProject = asyncHandler(
  async (req: Request, res: Response) => {
    const project = await Project.findById(req.params.id);
    if (!project) throw new BadRequestError('Project Not Found.');
    project.remove();
    res.status(200).json(project);
  }
);
