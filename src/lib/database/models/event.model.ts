import mongoose, {
  Document,
  Model,
  model,
  models,
  ObjectId,
  Schema,
} from "mongoose";

export interface IEvent extends Document {
  title: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  location?: string;
  organizor?: ObjectId;
  category?: ObjectId;
  price?: string;
  isFree?: boolean;
  imageUrl: string;
  url: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const EventSchema: Schema<IEvent> = new Schema(
  {
    title: { type: String, required: true, index: true },
    description: { type: String },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    location: { type: String },
    organizor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    price: {
      type: String,
    },
    isFree: {
      type: Boolean,
      default: false,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const EventModel =
  (models.Event as Model<IEvent>) || model<IEvent>("Event", EventSchema);

export default EventModel;
