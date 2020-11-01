import { NextFunction } from "express";

export const advancedResults = (model: any) => async (
  req: any,
  res: any,
  next: NextFunction
) => {
  let query;
  const requestQuery = { ...req.query };
  const removeFields = ["select", "sort", "page", "limit"];
  removeFields.forEach((param) => delete requestQuery[param]);

  let queryStr = JSON.stringify(requestQuery);
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );
  query = model.find(JSON.parse(queryStr));

  const page = +req.query.page || 1;
  const limit = +req.query.limit || 6;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.countDocuments();
  query = query.skip(startIndex).limit(limit);

  const results = await query;
  const pagination = { next: {}, prev: {} };

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.advancedResults = {
    success: true,
    count: results.length,
    pagination,
    data: results,
  };

  next();
};
