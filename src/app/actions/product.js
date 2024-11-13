import { Product } from "@/models/product-model";
import { replaceMongoId, replaceMongoIdInArray } from "@/lib/transformObject";

// Create a new product
export async function createProduct(formData) {
  try {
    const newProduct = await Product.create(formData);
    return replaceMongoId(newProduct);
  } catch (err) {
    console.error(err);
  }
}

// Get all products
export async function getProducts() {
  try {
    const products = await Product.find().lean();
    return replaceMongoIdInArray(products);
  } catch (err) {
    console.error(err);
  }
}

// get products by category
export async function getProductsByCategory(categoryId) {
  try {
    const products = await Product.find({ category: categoryId }).lean();
    return replaceMongoIdInArray(products);
  } catch (err) {
    console.error(err);
  }
}

// Delete a product
export async function deleteProduct(id) {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return true;
  } catch (err) {
    console.error(err);
  }
}

// Update a product
export async function updateProduct(id, formData) {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, formData, {
      new: true,
    });
    return replaceMongoId(updatedProduct);
  } catch (err) {
    console.error(err);
  }
}

// Get a product by id
export async function getProductById(id) {
  try {
    const product = await Product.findById(id).lean();
    return replaceMongoId(product);
  } catch (err) {
    console.error(err);
  }
}
