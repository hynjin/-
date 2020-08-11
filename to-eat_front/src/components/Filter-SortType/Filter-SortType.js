import React, { useState } from "react";
import { SectionSortType, SortTypeContainer } from "./Filter-SortType.style";
import CustomButton from "./../CustomButton/CustomButton";

const sortTypes = { review: "리뷰순", rating: "평점순" };

const FilterSortType = () => {
  const { review, rating } = sortTypes;
  const [sortType, setSortType] = useState(review);

  const handleSortClick = () => {
    if (sortType === review) {
      setSortType(rating);
    } else {
      setSortType(review);
    }
  };

  return (
    <SectionSortType>
      <h3>
        정렬 ({review} / {rating})
      </h3>
      <SortTypeContainer>
        {
          <CustomButton
            inverted={sortType === rating}
            handleClick={handleSortClick}
            btnType="sort"
          >
            {sortType}
          </CustomButton>
        }
      </SortTypeContainer>
    </SectionSortType>
  );
};

export default FilterSortType;
