import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatNumber } from "@/lib/utils";

type Props = {
  imgUrl: string;
  imgAlt: string;
  title: string;
  value: number | string;
  textStyle?: string;
  href?: string;
  isAuthor?: boolean;
};

const Metric = ({
  imgUrl,
  imgAlt,
  title,
  value,
  textStyle,
  href,
  isAuthor,
}: Props) => {
  if (typeof value === "number") {
    value = formatNumber(value);
  }

  return (
    <div className="flex-center flex-wrap gap-1">
      {href ? (
        <Link href={href} className="cursor-pointer">
          <Image
            src={imgUrl}
            alt={imgAlt}
            width={20}
            height={20}
            className={`object-contain ${href ? "rounded-full" : ""}`}
          />
        </Link>
      ) : (
        <Image
          src={imgUrl}
          alt={imgAlt}
          width={20}
          height={20}
          className={`object-contain ${href ? "rounded-full" : ""}`}
        />
      )}

      <p className={`${textStyle} flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          {title}
        </span>
      </p>
    </div>
  );
};

export default Metric;
