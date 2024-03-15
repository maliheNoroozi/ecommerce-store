import { useCart } from "@/hooks/use-cart";
import { Button } from "../ui/button";
import { Currency } from "../ui/currency";
import { Product } from "@/types";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const Summary = () => {
  const searchParams = useSearchParams();

  const items = useCart((state) => state.items);
  const removeAllItems = useCart((state) => state.removeAllItems);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed");
      removeAllItems();
    } else if (searchParams.size > 0) {
      toast.error("Something went wrong");
    }
  }, [searchParams, removeAllItems]);

  const totalPrice = items.reduce((total: number, item: Product) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      { productIds: items.map((item) => item.id) }
    );
    window.location = response.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </div>
  );
};
