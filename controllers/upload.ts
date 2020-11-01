import { Request, Response } from "express";
import { v4 } from "uuid";
import AWS from "aws-sdk";
import keys from "../config/keys";

const s3 = new AWS.S3({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey,
  signatureVersion: "v4",
  region: "us-west-1",
});

export const createUpload = (req: Request, res: Response) => {
  const key = `${req.currentUser!._id}/${v4()}.jpeg`;

  s3.getSignedUrl(
    "putObject",
    { Bucket: "erik-gallery", ContentType: "image/jpeg", Key: key },
    (err, url) => res.send({ key, url })
  );
};
