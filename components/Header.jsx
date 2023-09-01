import React, { useContext, useEffect } from "react";
import { ConnectButton } from "../components";
import { logo } from "../assets";
import Image from "next/image";
import { ether } from "../assets";

const Header = () => {
  return (
    <nav className="w-full h-15 text-white flex py-2 px-4 lg:px-10 justify-between items-center border-b-[1px] border-gray-400">
      <a href="/">
        <Image src={logo} alt="Ether icon" className="w-40 hover:opacity-80" />
      </a>
      <div className="flex items-center md:pb-4 justify-center">
        <Image
          src={ether}
          alt="Ether icon"
          className="w-8 h-8 md:w-10 md:h-10"
        />
        <h1 className="pl-2 font-bold text-3xl md:text-4xl">
          DeFi Lend & Borrow
        </h1>
      </div> 
      <ConnectButton />
    </nav>
  );
};

export default Header;
