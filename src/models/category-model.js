import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    categoryThumbnail: {
        type: String,
        required: true
    }
});

export const Category = mongoose.models.Category || mongoose.model("Category", CategorySchema);