"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathName = usePathname();
  // console.log(pathName);

  return (
    <div className="drawer sm:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          <Image
            src="/assets/icons/hamburger.svg"
            alt="mobile menu"
            width={15}
            height={15}
            className="invert-colors"
          />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="background-light900_dark200 menu min-h-full w-80 gap-8 border-none bg-base-200 p-4 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={"/assets/images/site-logo.svg"}
                width={50}
                height={50}
                alt="JumboMoves Logo"
                className="rounded-full"
              />
              <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
                Jumbo <span className="text-primary-500">Moves</span>
              </p>
            </Link>
          </li>
          {sidebarLinks.map((link) => {
            const isActive = pathName.includes(link.route);
            return (
              <li key={link.label} className="">
                <Link
                  href={link.route}
                  className={`flex items-center gap-4 py-4 ${
                    isActive
                      ? "primary-gradient rounded-lg text-light-900"
                      : "text-dark300_light900"
                  }`}
                >
                  <Image
                    src={link.imgURL}
                    alt={link.label}
                    width={20}
                    height={20}
                    className={`${isActive ? "" : "invert-colors"}`}
                  />
                  <p>{link.label}</p>
                </Link>
              </li>
            );
          })}
          <SignedOut>
            <div className="flex flex-col gap-4">
              <div className="w-full">
                <Link href={"/sign-in"}>
                  <button className="btn btn-accent min-h-[41px] w-full rounded-lg border border-none px-4 py-3">
                    Sign In
                  </button>
                </Link>
              </div>
              <div>
                <Link href={"/sign-up"}>
                  <button className="light-border-2 btn-tertiary text-dark400_light900 btn min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </SignedOut>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
