import React from "react";

import { useKakaoMap } from "../../hooks/useKakaoMap";
import { MapContent } from "./Map.styles";
import { useSelector } from "react-redux";

const Map = () => {
  const { map, kakao } = useKakaoMap();
  const stores = useSelector(state => state.store.stores);
  const selected = useSelector(state => state.map.selected);

  let positions = [];

  if (stores.length && kakao) {
    positions = stores.map(store => {
      return {
        title: store.place_name,
        latlng: new kakao.maps.LatLng(Number(store.y), Number(store.x))
      };
    });
  }

  for (let i = 0; i < positions.length; i++) {
    const imageSize = new kakao.maps.Size(24, 35);
    const { latlng, title } = positions[i];
    let imageSrc;

    if (selected !== title) {
      imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    } else {
      imageSrc = "http://t1.daumcdn.net/mapjsapi/images/2x/marker.png";
    }
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    let marker;

    marker = new kakao.maps.Marker({
      position: latlng,
      title: title,
      image: markerImage
    });

    marker.setMap(map);
  }

  return <MapContent id="map"></MapContent>;
};

export default Map;
