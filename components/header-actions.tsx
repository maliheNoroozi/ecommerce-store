import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";

export const HeaderActions = () => {
  return (
    <div className="ml-auto">
      <Button className="relative p-0">
        <ShoppingBagIcon size={20} />
        <span className="rounded-full bg-black text-white absolute left-[10px] top-[-8px] z-10 min-w-4 h-4 p-2 flex items-center justify-center">
          0
        </span>
      </Button>
    </div>
  );
};
