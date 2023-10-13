"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { SignedOut } from "@clerk/nextjs";

const LeftSidebar = () => {
  const pathName = usePathname();
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col  justify-between overflow-y-auto border-r p-6 pt-32 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <ul className="background-light900_dark200 flex w-full flex-col gap-4  border-none p-4 text-base-content ">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathName.includes(link.route) && link.route.length > 1) ||
            pathName === link.route;
          return (
            <li key={link.label} className="">
              <Link
                href={link.route}
                className={`flex items-center gap-4 p-4 ${
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
                <p className="max-lg:hidden">{link.label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        <SignedOut>
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <Link href={"/sign-in"}>
                <button className="text-dark400_light900 btn btn-accent min-h-[41px] w-full rounded-lg border border-none px-4 py-3">
                  <Image
                    src={"assets/icons/account.svg"}
                    alt="log in"
                    width={20}
                    height={20}
                    className=" invert-colors lg:hidden"
                  />
                  <span className={` max-lg:hidden`}>Sign In</span>
                </button>
              </Link>
            </div>
            <div>
              <Link href={"/sign-up"}>
                <button className="light-border-2 btn-tertiary text-dark400_light900 btn min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                  <Image
                    src={"assets/icons/sign-up.svg"}
                    alt="log in"
                    width={20}
                    height={20}
                    className=" invert-colors lg:hidden"
                  />
                  <span className={` max-lg:hidden`}>Sign Up</span>
                </button>
              </Link>
            </div>
          </div>
        </SignedOut>
      </div>
    </section>
  );
};

export default LeftSidebar;
