"use client";
import { useQuery } from "react-query";
import Image from "next/image";
import axios from "axios";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: record, status, update } = useSession();
  console.log(record, status, update);
  const url = "https://jsonplaceholder.typicode.com/posts";

  const getData = async () => {
    const response = await axios.get(url);
    return response.data;
  };

  const { data, isLoading } = useQuery({
    queryFn: () => getData(),
    queryKey: ["posts"]
  });
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
console.log(data)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map((record: any) => (
        <h2>{record.title}</h2>
      ))}
    </main>
  );
}
