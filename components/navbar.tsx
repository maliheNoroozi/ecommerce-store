"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface NavbarProps {
  data: Category[];
}

export const Navbar: FC<NavbarProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((item) => ({
    href: `/category/${item.id}`,
    label: item.name,
    active: pathname === `/category/${item.id}`,
  }));

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
