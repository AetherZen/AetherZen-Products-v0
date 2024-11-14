"use client";

import ShowCaseSection from "@/components/showcaseSection/ShowCaseSection";
import WebsiteCategory from "@/components/WebsiteCategory/WebsiteCategory";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  console.log("params", params?.projects);

  if (params?.projects?.length === 1) {
    return <WebsiteCategory  category={params.projects[0]} />;
  } else if (params?.projects?.length === 2) {
    return <ShowCaseSection project={params.projects[1]} />;
  }

  return <p>No categories available!</p>;
}
