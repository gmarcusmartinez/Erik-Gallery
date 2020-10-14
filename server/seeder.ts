import fs from "fs";
import "colors";
import { Print } from "./models/Print";

import { connectDB } from "./config/db";

const prints = JSON.parse(
  fs.readFileSync(`${__dirname}/data/prints.json`, "utf-8")
);

connectDB();

const importData = async () => {
  try {
    await Print.create(prints);
    await console.log("Data imported.".green);
  } catch (err) {
    console.error(err.message);
  }
};

const destroyData = async () => {
  try {
    await Print.deleteMany({});
    console.log("Data destroyed.".red);
  } catch (err) {
    console.error(err.message);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  destroyData();
}
