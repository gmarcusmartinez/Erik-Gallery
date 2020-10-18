import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import keys from "../config/keys";
import { PasswordManager } from "../services/PasswordManager";

interface UserAttrs {
  userName: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

export interface UserDoc extends mongoose.Document {
  userName: string;
  password: string;
  photo: string;
  getSignedJwtToken(): string;
}

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    photo: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["user"],
      default: "user",
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await PasswordManager.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

userSchema.methods.getSignedJwtToken = function () {
  const { _id, userName } = this;
  return jwt.sign({ _id, userName }, keys.jwtSecret, {
    expiresIn: keys.jwtExpire,
  });
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
