"use client";

import { Color, Size } from "@/types";
import { Filter } from "./filter";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import { PlusIcon, XIcon } from "lucide-react";
import { Dialog } from "@headlessui/react";

interface FiltersProps {
  colors: Color[];
  sizes: Size[];
}

export const MobileFilters: FC<FiltersProps> = ({ colors, sizes }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <PlusIcon size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <Button
                onClick={onClose}
                className="p-2 rounded-full bg-white hover:bg-white border border-blue-100 h-auto"
              >
                <XIcon size={16} className="text-black" />
              </Button>
            </div>
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
