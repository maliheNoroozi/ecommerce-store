"use client";

import { ShoppingCartIcon } from "lucide-react";
import { Currency } from "@/components/ui/currency";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useCart } from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

export const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <span>{data?.size?.value}</span>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          className="flex items-center gap-x-2"
          onClick={() => cart.addItem(data)}
        >
          Add To Cart
          <ShoppingCartIcon size={20} />
        </Button>
      </div>
    </div>
  );
};
