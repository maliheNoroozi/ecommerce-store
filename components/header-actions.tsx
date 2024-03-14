"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { ShoppingBagIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const HeaderActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto">
      <Button className="rounded-3xl">
        <ShoppingBagIcon size={20} className="mr-2" />
        <span className="text-white">{cart.items.length}</span>
      </Button>
    </div>
  );
};
