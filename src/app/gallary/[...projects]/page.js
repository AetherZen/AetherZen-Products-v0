"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  console.log("params", params?.projects);

  return <p>hi</p>;
}
