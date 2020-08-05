import React from "react";
import styled from "styled-components";
import { useKakaoMap } from "../../hooks/useKakaoMap";

const Map = () => {
  const { map } = useKakaoMap();
  return <MapContent id="map"></MapContent>;
};

const MapContent = styled.div`
  width: 100%;
  height: 100%;
`;

export default Map;
