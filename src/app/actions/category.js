"use server";
import { Category } from "@/models/category-model";
import { replaceMongoId, replaceMongoIdInArray } from "@/lib/transformObject";

// Create a new category
export async function createCategory(formData) {
  try {
    const newCategory = await Category.create(formData);
    return replaceMongoId(newCategory);
  } catch (err) {
    console.error(err);
  }
}

// Get all categories
export async function getCategories() {
  try {
    const categories = await Category.find().lean();
    return replaceMongoIdInArray(categories);
  } catch (err) {
    console.error(err);
  }
}

// Delete a category
export async function deleteCategory(id) {
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    return true;
  } catch (err) {
    console.error(err);
  }
}

// Update a category
export async function updateCategory(id, formData) {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, formData, {
      new: true,
    });
    return replaceMongoId(updatedCategory);
  } catch (err) {
    console.error(err);
  }
}

// Get a category by id
export async function getCategoryById(id) {
  try {
    const category = await Category.findById(id).lean();
    return replaceMongoId(category);
  } catch (err) {
    console.error(err);
  }
}
