import { XIcon } from "lucide-react";
import { Button } from "./button";

export const CloseButton = ({ ...props }) => {
  return (
    <Button size="icon" variant="outline" className="rounded-full" {...props}>
      <XIcon size={24} />
    </Button>
  );
};
