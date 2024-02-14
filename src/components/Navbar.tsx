import React from "react";

const Navbar = () => {
  return (
    <nav className="shadow sticky top-0 bg-white z-[1]">
      <div className=" max-w-[1330px] h-[80px] m-auto w-full flex items-center px-[15px]">
        <img
          src="https://app.rigi.club/wp-content/themes/Rigi/assets/img/logo.svg"
          alt=""
        />
        <span className=" text-rigi3 font-[500] text-[24px] md:text-[30px] ml-2">
          Frontend Assignment
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
