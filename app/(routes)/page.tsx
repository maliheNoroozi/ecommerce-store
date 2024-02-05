import { Billboard } from "@/components/billboard";
import { getBillboard } from "@/actions";

export default async function Home() {
  const billboard = await getBillboard("750bdbae-7cc0-45c1-ab71-f2e350aafe7e");

  return (
    <div className="space-y-10 pb-10">
      <Billboard data={billboard} />
    </div>
  );
}
