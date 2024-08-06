"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="bg-black static m-2 mb-0 rounded-2xl flex text-white items-center justify-between px-6 py-4 md:px-6 sm:px-2">
        <Link href="/">
          <Image src="/images/logo.png" width={150} height={150} alt="logo" />
        </Link>
        <div className="hidden md:flex gap-7 text-lg justify-center flex-1">
          <Link
            className="p-0.5 border-b-4 border-transparent hover:border-mOrange  transition-all duration-150 ease-in"
            href="/"
          >
            Home
          </Link>
          <Link
            className="p-0.5 border-b-4 border-transparent hover:border-mOrange  transition-all duration-150 ease-in"
            href="#features"
          >
            About Us
          </Link>
          <Link
            className="p-0.5 border-b-4 border-transparent hover:border-mOrange  transition-all duration-150 ease-in"
            href="#faq"
          >
            Event
          </Link>
          <Link
            className="p-0.5 border-b-4 border-transparent hover:border-mOrange  transition-all duration-150 ease-in"
            href="/about"
          >
            Sponsors
          </Link>
          <Link
            className="p-0.5 border-b-4 border-transparent hover:border-mOrange  transition-all duration-150 ease-in"
            href="/about"
          >
            Pricing Plan
          </Link>
        </div>
        <div className="md:hidden flex items-center gap-2">
          {isMenuOpen ? (
            <div></div>
          ) : (
            <Link
              href="#"
              className="bg-mOrange px-4 text-lg py-2 border-2 border-mOrange hover:bg-transparent rounded-xl transition-all duration-150 ease-in"
              passHref
              target="_blank"
            >
              Buy Ticket
            </Link>
          )}
          <button
            className=" px-4 py-2 rounded-xl border-mOrange border-2 transition-all duration-150 ease-in"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <IoCloseSharp size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </button>
        </div>
        <div className="hidden md:block">
          <Link
            href="#"
            className="bg-mOrange px-4 text-lg py-2 border-2 border-mOrange hover:bg-transparent rounded-xl transition-all duration-150 ease-in"
            passHref
            target="_blank"
          >
            Purchase Ticket
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black m-5 mt-0 rounded-b-2xl text-white px-4 py-3">
          <div className="flex flex-col gap-3 text-base">
            <Link
              className="p-2  rounded-xl transition-all duration-150 ease-in"
              href="/"
            >
              Home
            </Link>
            <Link
              className="p-2  rounded-xl transition-all duration-150 ease-in"
              href="#features"
            >
              About Us
            </Link>
            <Link
              className="p-2  rounded-xl transition-all duration-150 ease-in"
              href="#faq"
            >
              Event
            </Link>
            <Link
              className="p-2  rounded-xl transition-all duration-150 ease-in"
              href="/about"
            >
              Sponsors
            </Link>
            <Link
              className="p-2  rounded-xl transition-all duration-150 ease-in"
              href="/about"
            >
              Pricing Plan
            </Link>
            <Link
              href=""
              className="bg-mOrange px-4 text-lg py-2 border-2 border-mOrange hover:bg-transparent rounded-xl transition-all duration-150 ease-in"
              passHref
              target="_blank"
            >
              Purchase Ticket
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
