"use server";

import { Category } from "@/types";

const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;
const URL = `${publicApiUrl}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(URL, { cache: "no-store" });
  return response.json();
};
