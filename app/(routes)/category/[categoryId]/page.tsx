import { getProducts, getCategory, getColors, getSizes } from "@/actions";
import { Billboard } from "@/components/billboard";
import { Filters } from "@/components/filters";
import { ProductCard } from "@/components/products/product-card";
import { NoResults } from "@/components/ui/no-results";

interface PageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Billboard data={category.billboard} />
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          <Filters />
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {products.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
