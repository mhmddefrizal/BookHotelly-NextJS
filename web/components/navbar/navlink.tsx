"use client";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Navlink = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100"></button>
    </>
  );
};

export default Navlink;
