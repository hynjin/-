import React from "react";

import { useKakaoMap } from "../../hooks/useKakaoMap";
import { MapContent } from "./Map.styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Map = () => {
  const { map, kakao } = useKakaoMap();
  const dispatch = useDispatch();
  const stores = useSelector(state => state.store.stores);

  let positions = [];

  if (stores.length && kakao) {
    positions = stores.map(store => {
      return {
        title: store.place_name,
        latlng: new kakao.maps.LatLng(Number(store.y), Number(store.x))
      };
    });
  }
  console.log(positions);
  for (let i = 0; i < positions.length; i++) {
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    const imageSize = new kakao.maps.Size(24, 35);
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    const { latlng, title } = positions[i];
    const marker = new kakao.maps.Marker({
      map,
      position: latlng,
      title: title,
      image: markerImage
    });
  }
  return <MapContent id="map"></MapContent>;
};

export default Map;
