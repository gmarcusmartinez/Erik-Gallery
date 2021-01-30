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
export const getProject = asyncHandler(async (req: Request, res: Response) => {
  const project = await Project.findById(req.params.id);
  if (!project) throw new BadRequestError('Project not found.');
  res.status(200).json(project);
});
