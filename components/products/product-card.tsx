"use client";

import Image from "next/image";
import { Product } from "@/types";
import { Currency } from "@/components/ui/currency";
import { Button } from "../ui/button";
import { ExpandIcon, ShoppingCartIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProductCard {
  data: Product;
}

export const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${data.id}`);
  };

  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      onClick={handleClick}
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {}}
              className="bg-white rounded-full hover:bg-white hover:scale-110 transition"
            >
              <ExpandIcon size={20} className="text-gray-600" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {}}
              className="bg-white rounded-full hover:bg-white hover:scale-110 transition"
            >
              <ShoppingCartIcon size={20} className="text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};
