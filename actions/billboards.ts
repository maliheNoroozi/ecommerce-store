"use server";

import type { Billboard } from "@/types";

const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;
const URL = `${publicApiUrl}/billboards`;

export const getBillboards = async (): Promise<Billboard[]> => {
  const response = await fetch(URL, { cache: "no-store" });
  return response.json();
};

export const getBillboard = async (id: string): Promise<Billboard> => {
  const response = await fetch(`${URL}/${id}`, { cache: "no-store" });
  return response.json();
};
