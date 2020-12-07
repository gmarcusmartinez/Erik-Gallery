import { ProductType } from "aws-sdk/clients/servicecatalog";
import { NextFunction } from "express";

export const advancedResults = (model: any, type: ProductType) => async (
  req: any,
  res: any,
  next: NextFunction
) => {
  let query;
  const requestQuery = { ...req.query };
  const removeFields = ["page"];
  removeFields.forEach((param) => delete requestQuery[param]);

  let queryStr = JSON.stringify(requestQuery);
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );
  query = model.find(JSON.parse(queryStr));

  const limit = 6;
  const page = Number(req.query.page) || 1;
  const skip = limit * (page - 1);

  const count = await model.countDocuments({ type, isPublished: true });
  const data = await model
    .find({ type, isPublished: true })
    .limit(limit)
    .skip(skip);
  const pages = Math.ceil(count / limit);

  res.advancedResults = { page, pages, data };

  next();
};
