import { model, Model, models, Schema } from "mongoose";

export interface ICategory extends Document {
  name: string;
}

const CategorySchema: Schema<ICategory> = new Schema(
  {
    name: { type: String, required: true, index: true },
  },
  {
    timestamps: true,
  }
);

const CategoryModel =
  (models.Category as Model<ICategory>) ||
  model<ICategory>("Category", CategorySchema);
export default CategoryModel;
