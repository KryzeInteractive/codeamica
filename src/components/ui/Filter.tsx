import { Dispatch, SetStateAction } from "react";

const filterData = [
  {
    category: "level",
    name: "Level",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    category: "type",
    name: "Type",
    options: ["Course", "Learning Path"],
  },
  {
    category: "estimatedHours",
    name: "Time to complete",
    options: ["All", "5-10 hours", "10-20 hours", "20-60 hours", "60+ hours"],
  },
];

export default function Filter({
  filter,
  setFilter,
  onFilter,
  onClear,
}: {
  filter: Record<string, any[]>;
  setFilter: Dispatch<SetStateAction<Record<string, any[]>>>;
  onFilter: () => void;
  onClear: () => void;
}) {
  const handleCheck = (key: string, value: any[]) => {
    setFilter((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return (
    filter && (
      <div className="flex h-fit w-full flex-col gap-4 rounded-[5px] border-[1px] border-black p-6">
        <section className="flex items-center gap-2">
          <button
            className="flex h-fit items-center justify-center gap-2 rounded-[5px] border-[1px] border-[var(--primary-text-color)] px-2 py-1.5"
            onClick={onFilter}
          >
            <img
              width="20"
              height="20"
              src="/assets/filter.svg"
              alt="filter-icon"
            />
            <span className="font-bold">Filter</span>
          </button>
          <button className="cursor-pointer px-2" onClick={onClear}>
            Clear
          </button>
        </section>
        {filterData.map((data, index) => {
          return (
            <FilterCategory
              key={index}
              category={data.category}
              name={data.name}
              options={data.options}
              pickedOptions={filter[data.category]}
              handleCheck={handleCheck}
            />
          );
        })}
      </div>
    )
  );
}

interface FilterCategoryProps {
  category: string;
  name: string;
  options: any[];
  pickedOptions: any[];
  handleCheck: (key: string, value: any[]) => void;
}

function FilterCategory({
  category,
  name,
  options,
  pickedOptions,
  handleCheck,
}: FilterCategoryProps) {
  const updateFilter = (value: any) => {
    if (pickedOptions.includes(value)) {
      const updatedOptions = pickedOptions.filter((option) => option !== value);
      handleCheck(category, updatedOptions);
    } else {
      const updatedOptions = pickedOptions.concat(value);
      handleCheck(category, updatedOptions);
    }
  };
  return (
    <section className="flex flex-col gap-2">
      <h3 className="font-bold leading-5 tracking-[0.25px]">{name}</h3>
      {options.map((option, index) => {
        return (
          <div key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              width="24"
              height="24"
              onChange={() => {
                updateFilter(option);
              }}
              checked={pickedOptions.includes(option)}
            />
            <span>{option}</span>
          </div>
        );
      })}
    </section>
  );
}