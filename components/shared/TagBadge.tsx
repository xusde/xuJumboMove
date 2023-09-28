import Link from "next/link";
import React from "react";

type Props = {
  _id: number;
  name: string;
  showCount?: boolean;
  numQuestions?: number;
};

const TagBadge = ({ _id, name, showCount, numQuestions }: Props) => {
  return (
    <Link
      href={`/questions/${_id}`}
      className="flex items-center justify-between gap-6"
    >
      <span className="subtle-medium background-light800_dark300 text-light400_light500 badge rounded-md border-none p-4 uppercase">
        {name}
      </span>

      {showCount && (
        <p className="small-medium text-dark500_light700">{numQuestions}</p>
      )}
    </Link>
  );
};

export default TagBadge;
