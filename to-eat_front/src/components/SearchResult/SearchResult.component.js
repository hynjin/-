import React from "react";
import { useSelector } from "react-redux";
import getDistance from "geolib/es/getDistance";
import { Icon } from "semantic-ui-react";

import {
  SearchResultContent,
  SearchResultContainer,
  SearchResultitem
} from "./SearchResult.styles";
import { usePosition } from "../../hooks/usePosition";
import CustomButton from "../CustomButton/CustomButton.component";

const SearchResult = () => {
  const stores = useSelector(state => state.store.stores);
  const { lat, lng } = usePosition();

  const handleBackwardClick = () => {
    console.log("empty stores in global state and update view");
  };

  return (
    <SearchResultContainer>
      <CustomButton inverted noBackground handleClick={handleBackwardClick}>
        <Icon name="arrow left" size="big" />
      </CustomButton>
      {stores.map((store, i) => {
        const {
          place_url,
          place_name,
          category_name,
          phone,
          road_address_name,
          x,
          y
        } = store;
        return (
          <SearchResultitem key={i}>
            <div>
              <a href={place_url} target="blank">
                {place_name}
              </a>{" "}
            </div>
            <div>| {category_name.split(">")[1].trim()}</div>
            <div>| {phone}</div>
            <div>| {road_address_name}</div>
            <div>
              {(
                getDistance(
                  { latitude: lat, longitude: lng },
                  { latitude: Number(y), longitude: Number(x) }
                ) / 1000
              ).toFixed(1)}{" "}
              km
            </div>
          </SearchResultitem>
        );
      })}
    </SearchResultContainer>
  );
};

export default SearchResult;
