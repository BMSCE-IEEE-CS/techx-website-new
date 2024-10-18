"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import localFont from "next/font/local";
import Image from "next/image";

const spacex = localFont({ src: "../app/SpaceX.ttf" });

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[#2e6bb4] opacity-70"></div>
      <div className="relative">
        <div className="static flex items-center justify-between px-4 py-6 md:px-12 sm:px-2">
          <Link href="/">
            <Image
              src="/images/techxnewlogo.png"
              width={256}
              height={256}
              alt="logo black"
            />
          </Link>
          <div className="hidden md:flex gap-7 text-lg justify-center flex-1 text-black">
            <Link
              className="p-0.5 border-b-4 border-transparent font-bold text-xl hover:border-mBlue  transition-all duration-150 ease-in"
              href="/"
            >
              Home
            </Link>
            <Link
              className="p-0.5 border-b-4 border-transparent font-bold text-xl hover:border-mBlue  transition-all duration-150 ease-in"
              href="#about"
            >
              About Us
            </Link>
            <Link
              className="p-0.5 border-b-4 border-transparent font-bold text-xl hover:border-mBlue  transition-all duration-150 ease-in"
              href="#schedule"
            >
              Schedule
            </Link>
            <Link
              className="p-0.5 border-b-4 border-transparent font-bold text-xl hover:border-mBlue  transition-all duration-150 ease-in"
              href="#sponsors"
            >
              Collaborators
            </Link>
            <Link
              className="p-0.5 border-b-4 border-transparent font-bold text-xl hover:border-mBlue  transition-all duration-150 ease-in"
              href="#pricing"
            >
              Pricing Plan
            </Link>
          </div>
          <div className="md:hidden flex items-center gap-2">
            {/* {isMenuOpen ? (
            <div></div>
          ) : (
            <Link
              href="#"
              className="bg-mBlue px-4 text-lg py-2 border-4 border-mBlue hover:bg-transparent rounded-xl transition-all duration-150 ease-in"
              passHref
              target="_blank"
            >
              Tickets
            </Link>
          )} */}
            <button
              className=" px-4 py-2 rounded-xl border-mBlue border-4 transition-all duration-150 ease-in"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <IoCloseSharp size={24} />
              ) : (
                <GiHamburgerMenu size={24} />
              )}
            </button>
          </div>
          <div className="hidden md:hidden lg:block">
            <Link
              href="https://web.ticketdude.app/e/81"
              className="bg-mBlue px-4 text-lg py-2 border-4 text-white hover:text-black border-mBlue hover:bg-transparent rounded-xl transition-all duration-150 ease-in"
              passHref
              target="_blank"
            >
              Purchase Ticket
            </Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black rounded-b-2xl text-white px-4 py-3">
            <div className="flex flex-col gap-3 text-base">
              <Link
                className="p-2  rounded-xl transition-all duration-150 ease-in"
                href="/"
              >
                Home
              </Link>
              <Link
                className="p-2  rounded-xl transition-all duration-150 ease-in"
                href="#about"
              >
                About Us
              </Link>
              <Link
                className="p-2  rounded-xl transition-all duration-150 ease-in"
                href="#schedule"
              >
                Schedule
              </Link>
              <Link
                className="p-2  rounded-xl transition-all duration-150 ease-in"
                href="#sponsors"
              >
                Collaborators
              </Link>
              <Link
                className="p-2  rounded-xl transition-all duration-150 ease-in"
                href="#pricing"
              >
                Pricing Plan
              </Link>
              <Link
                href=""
                className="bg-mBlue px-4 text-lg py-2 border-4  border-mBlue hover:bg-transparent rounded-xl transition-all duration-150 ease-in"
                passHref
                target="_blank"
              >
                Purchase Ticket
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
