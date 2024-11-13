"use client";

import WebsiteCategory from "@/components/WebsiteCategory/WebsiteCategory";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  console.log("params", params?.projects);
  if(params?.projects.length===1){
    return <WebsiteCategory>{params?.projects[0]}</WebsiteCategory>
  }else if(params?.projects.length===2){
    return <h2>{params?.projects[1]}</h2>
  }

  return <p>{params?.projects}</p>;
}