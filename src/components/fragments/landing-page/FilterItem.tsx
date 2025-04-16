import { useEffect, useState } from "react";
import "./filter.scss";

interface FilterItemProps {
  textContent: string;
  width: number;
  fontWeight: number;
}
function FilterItem({ textContent, width, fontWeight }: FilterItemProps) {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  let responsiveHeight = 29;
  let responsiveWidth = width;

  if (windowWidth <= 750) {
    responsiveWidth = (width * 80) / 100;
  }
  return (
    <div
      className="filter-item"
      style={{ width: responsiveWidth || width, fontWeight: fontWeight }}
    >
      <p>{textContent}</p>
    </div>
  );
}

export default FilterItem;
