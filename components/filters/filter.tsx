"use client";

import { FC } from "react";
import qs from "query-string";
import { Color, Size } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

interface FIlterProps {
  data: (Color | Size)[];
  name: string;
  valueKey: string;
}

export const Filter: FC<FIlterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);

  const handleClick = (id: string) => {
    const currentQuery = qs.parse(searchParams.toString());

    const newQuery = {
      ...currentQuery,
      [valueKey]: id,
    };

    if (currentQuery[valueKey] === id) {
      newQuery[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: newQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <Button
            key={filter.id}
            className={cn(
              "flex items-center rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300 hover:bg-white",
              selectedValue === filter.id &&
                "bg-black text-white hover:bg-black"
            )}
            onClick={() => handleClick(filter.id)}
          >
            {filter.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
