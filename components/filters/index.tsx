import { getColors, getSizes } from "@/actions";
import { DesktopFilters } from "./desktop-filters";
import { MobileFilters } from "./mobile-filters";

export const Filters = async () => {
  const colors = await getColors();
  const sizes = await getSizes();

  return (
    <>
      <DesktopFilters sizes={sizes} colors={colors} />
      <MobileFilters sizes={sizes} colors={colors} />
    </>
  );
};
