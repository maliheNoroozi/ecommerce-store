"use server";

import { Color } from "@/types";

const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;
const URL = `${publicApiUrl}/colors`;

export const getColors = async (): Promise<Color[]> => {
  const response = await fetch(URL, { cache: "no-store" });
  return response.json();
};
