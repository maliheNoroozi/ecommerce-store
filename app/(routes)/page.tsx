import { Billboard } from "@/components/billboard";
import { getBillboard, getProducts } from "@/actions";
import { Products } from "@/components/products/products-list";

export default async function Home() {
  const billboard = await getBillboard("750bdbae-7cc0-45c1-ab71-f2e350aafe7e");
  const products = await getProducts({ isFeatured: true });

  return (
    <div className="space-y-10 pb-10">
      <Billboard data={billboard} />
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <Products title="Featured Products" items={products} />
      </div>
    </div>
  );
}
