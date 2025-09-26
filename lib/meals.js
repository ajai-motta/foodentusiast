import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
const db = sql("meals.db");
const requiredKeys = [
  "title",
  "instructions",
  "image",
  "summary",
  "creator",
  "creator_email",
];
export async function getMeals() {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 5000)
  );
  // throw new Error()
  return db.prepare("SELECT * FROM meals").all(); //all from geting and geting more than one
}

export async function getMealItem(slug) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 5000)
  );
  return db.prepare("SELECT * FROM meals WHERE slug= ?").get(slug);
}
export async function saveMeal(meal) {
  const hasUndefined = Object.values(meal).some((value) => value === undefined);
  const missingKeys = requiredKeys.filter(
    (key) =>
      !(key in meal) ||
      meal[key] === undefined ||
      meal[key] === null ||
      meal[key] === ""
  );
  if (missingKeys.length > 0) {
    throw new Error("Something is missing");
  }
  if (hasUndefined) {
    throw new Error("Something is undefined");
  }
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extention = meal.image.name.split(".").pop();
  const num = Math.floor(Math.random() * 10) + 1;
  const filename = `${meal.slug}${num}.${extention}`;
  const stream = fs.createWriteStream(`public/images/${filename}`);
  const buffredImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(buffredImage), (error) => {
    if (error) {
      throw new Error("save image failed");
    }
  });
  stream.end()
  meal.image = `/images/${filename}`;
  db.prepare(
    `
    INSERT INTO meals
    ( title,
  instructions,
  image,
  summary,
  creator,
  creator_email,slug)
  VALUES
    (@title,@instructions,@image,@summary,@creator,@creator_email,@slug)
    `
  ).run(meal);
}
