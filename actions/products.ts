import type { Product } from "@/types";
import queryString from "query-string";

const publicApiUrl = process.env.NEXT_PUBLIC_API_URL;
const URL = `${publicApiUrl}/products`;

interface productsQueryProps {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
}

export const getProducts = async (
  query: productsQueryProps
): Promise<Product[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      colorId: query.colorId,
      isFeatured: query.isFeatured,
    },
  });
  const response = await fetch(url);
  return response.json();
};

export const getProduct = async (id: Product["id"]): Promise<Product> => {
  const response = await fetch(`${URL}/${id}`);
  return response.json();
};
