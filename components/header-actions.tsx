import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";

export const HeaderActions = () => {
  return (
    <div className="ml-auto">
      <Button className="rounded-3xl">
        <ShoppingBagIcon size={20} className="mr-2" />
        <span className="text-white">0</span>
      </Button>
    </div>
  );
};
