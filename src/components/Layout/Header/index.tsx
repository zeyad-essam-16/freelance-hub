"use client";

import Searchbar from "./Searchbar";
import Logo from "./Logo";
import UserActions from "./UserActions";

const Header = () => {
  return (
    <header className="py-6 px-4">
      <div className="container max-[319px]:flex max-[319px]:flex-col sm:px-2 mx-auto grid grid-cols-2 gap-4 md:grid-cols-[auto_1fr_auto] items-center">
        <div className="flex items-center order-1 md:order-1">
          <Logo />
        </div>
        <div className="max-[319px]:w-full col-span-2 order-3 md:order-2 md:col-span-1 md:col-start-2">
          <Searchbar />
        </div>
        <div className="flex items-center justify-end gap-2 order-2 md:order-3">
          <UserActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
