"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { ShoppingBagIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const HeaderActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto">
      <Button className="rounded-3xl" onClick={() => router.push("/cart")}>
        <ShoppingBagIcon size={20} className="mr-2" />
        <span className="text-white">{cart.items.length}</span>
      </Button>
    </div>
  );
};
