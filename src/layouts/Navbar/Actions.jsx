import React from "react";
import { HiGlobeAlt, HiOutlineMenu } from "react-icons/hi";
import Button from "./../../components/ui/Button";

const Actions = ({ toggleMenu }) => {
  return (
    <div className="flex text-blue items-center gap-5">
      <div className="flex items-center gap-1">
        <HiGlobeAlt className="text-2xl" />
        RU
      </div>
      <div className="flex lg:hidden">
        <HiOutlineMenu className="text-3xl" onClick={toggleMenu} />
      </div>
      <Button className={"bg-red"}>Call Now</Button>
    </div>
  );
};

export default Actions;
