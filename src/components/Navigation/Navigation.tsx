import React, { useState } from 'react';

import MenuList from './MenuList';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className="px-10 py-7 flex justify-between absolute bg-black w-full z-50">
        <a href="https://www.venetia.cz/">
          <img src="/logo.png" alt="logo" className="h-[40px]" />
        </a>
        <button
          onClick={handleMenuToggle}
          className="rounded-full flex flex-col items-center justify-center border border-white h-[40px] w-[40px] z-60"
        >
          <div className="h-[1px] w-[18px] bg-white" />
          <div className="mt-1 h-[1px] w-[18px] bg-white" />
          <div className="mt-1 h-[1px] w-[18px] bg-white" />
        </button>
      </nav>
      {isMenuOpen && (
        <div className="bg-black h-screen w-screen fixed overflow-hidden z-40 flex items-center">
          <div className="ml-20 mt-[96px]">
            <MenuList />
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
