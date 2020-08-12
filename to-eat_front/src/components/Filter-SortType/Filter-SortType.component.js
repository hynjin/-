import React from "react";
import { SectionSortType, SortTypeContainer } from "./Filter-SortType.style";
import CustomButton from "../CustomButton/CustomButton.component";
import { useDispatch, useSelector } from "react-redux";
import { setSortType } from "../../redux/actions/FilterActions";

const sortTypes = { review: "리뷰순", rating: "평점순" };

const FilterSortType = () => {
  const { review, rating } = sortTypes;
  const dispatch = useDispatch();
  const sortType = useSelector(state => state.filter.sortType);

  const handleSortClick = () => {
    if (sortType === review) {
      dispatch(setSortType(rating));
    } else {
      dispatch(setSortType(review));
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
