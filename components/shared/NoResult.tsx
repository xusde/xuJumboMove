import React from "react";
import Image from "next/image";
import Link from "next/link";
type NoResProps = {
  title: string;
  desc: string;
  link: string;
  linkText: string;
};
const NoResult = ({ title, desc, link, linkText }: NoResProps) => {
  return (
    <div
      className="mt-10
  flex flex-col items-center justify-center"
    >
      <Image
        src={"/assets/images/light-illustration.png"}
        alt="no result light illustration"
        width={270}
        height={200}
        className="object-contain dark:hidden"
      />
      <Image
        src={"/assets/images/dark-illustration.png"}
        alt="no result dark illustration"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />

      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {desc}
      </p>
      <Link href={link} className="flex justify-end">
        <button className="primary-gradient btn mt-5 min-h-[45px] px-4 py-3 text-light-900">
          {linkText}
        </button>
      </Link>
    </div>
  );
};

export default NoResult;
