"use server";

import { Size } from "@/types";

const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;
const URL = `${publicApiUrl}/sizes`;

export const getSizes = async (): Promise<Size[]> => {
  const response = await fetch(URL, { cache: "no-store" });
  return response.json();
};
