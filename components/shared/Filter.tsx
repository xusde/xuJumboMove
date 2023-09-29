import React from "react";

type FilterProps = {
  filters?: {
    name: string;
    value: string;
  }[];
  otherClasses?: string;
  containerClasses?: string;
};

const Filter = ({ filters, otherClasses, containerClasses }: FilterProps) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <select
        defaultValue={"newest"}
        className={`select select-ghost w-full  ${otherClasses} background-light800_dark300 text-dark500_light700`}
      >
        <option disabled>Options</option>
        {filters?.map((filter) => (
          <option value={filter.value} key={filter.value}>
            {filter.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
