import React from "react";
import CustomButton from "../CustomButton/CustomButton.component";

const FilterSearchBtn = () => {
  const handleSearchClick = () => {
    console.log("search");
  };
  return (
    <div>
      <CustomButton huge handleClick={handleSearchClick}>
        검 색
      </CustomButton>
    </div>
  );
};

export default FilterSearchBtn;
