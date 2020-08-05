import React from "react";

import { useKakaoMap } from "../../hooks/useKakaoMap";
import { MapContent } from "./Map.styles";

const Map = () => {
  const { map } = useKakaoMap();
  return <MapContent id="map"></MapContent>;
};

export default Map;
