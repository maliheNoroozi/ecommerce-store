import { getProduct } from "@/actions";

interface PageProps {
  params: {
    productId: string;
  };
}

export default async function Page({ params }: PageProps) {
  const product = await getProduct(params.productId);

  return <div>{product?.name}</div>;
}
