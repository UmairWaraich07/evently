import mongoose, { Document, Model, model, models, Schema } from "mongoose";

export interface IOrder extends Document {
  _id: string;
  stripeId: string;
  totalAmount: string;
  event: {
    _id: string;
    title: string;
  };
  buyer: {
    _id: string;
    firstname: string;
    lastname: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const OrderSchema: Schema<IOrder> = new Schema(
  {
    stripeId: {
      type: String,
      required: true,
      unique: true,
    },
    totalAmount: {
      type: String,
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel =
  (models.Order as Model<IOrder>) || model<IOrder>("Order", OrderSchema);

export default OrderModel;
