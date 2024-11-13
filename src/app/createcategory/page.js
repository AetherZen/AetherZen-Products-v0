"use client";
import { createCategory } from "../actions/category";
import { useState } from "react";
import { toast } from "sonner";

export default function page() {
  const [category, setCategory] = useState({
    name: "name",
    description: "description",
    categoryThumbnail: "thumbnail",
  });
  const handleCreateCategory = async () => {
    try {
      const newCategory = await createCategory(category);
      toast.success("Category created successfully");
    } catch (err) {
      console.error(err);
      toast.error("Error creating category");
    }
  };
  return (
    <>
      <h1>Create Category</h1>
    </>
  );
}
