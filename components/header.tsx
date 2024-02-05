import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { getCategories } from "@/actions";
import { HeaderActions } from "@/components/header-actions";

export const Header = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <div className="relative px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-x-6">
        <Link href="/" className="ml-4 lg:ml-0 flex gap-x-2 ">
          <p className="font-bold text-xl">STORE</p>
        </Link>
        <Navbar data={categories} />
        <HeaderActions />
      </div>
    </div>
  );
};
