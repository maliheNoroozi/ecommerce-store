import { Color, Size } from "@/types";
import { Filter } from "./filter";
import { FC } from "react";

interface FiltersProps {
  colors: Color[];
  sizes: Size[];
}

export const DesktopFilters: FC<FiltersProps> = ({ colors, sizes }) => {
  return (
    <div className="hidden lg:block">
      <Filter valueKey="sizeId" name="Sizes" data={sizes} />
      <Filter valueKey="colorId" name="Colors" data={colors} />
    </div>
  );
};
