import FilterItem from "./FilterItem";

interface FilterItemContainerProps {
  items: string[];
  width: number;
  fontWeight: number;
}

function FilterItemContainer({
  items,
  width,
  fontWeight,
}: FilterItemContainerProps) {
  return (
    <div className="filter-item-container">
      {items.map((item, index) => (
        <FilterItem
          key={index}
          textContent={item}
          width={width}
          fontWeight={fontWeight}
        />
      ))}
    </div>
  );
}

export default FilterItemContainer;
