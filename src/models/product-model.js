import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  liveLink: {
    type: String,
  },
  images: [{ type: String }],
  features: [{ type: String }],
  detailsItem: [
    {
      title: { type: String },
      details: { type: String },
    },
  ],
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
