import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dotenv from "dotenv";
import { usePosition } from "./usePosition";

/* global kakao */
dotenv.config();

export const useKakaoMap = () => {
  const { lat, lng } = usePosition();
  const [map, setMap] = useState(null);
  const [kakaoObj, setKakaoObj] = useState(null);
  const stores = useSelector(state => state.store.stores);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_APPKEY}&autoload=false`;
    document.head.appendChild(script);
    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("map");
        let options = {
          center: stores.length
            ? new kakao.maps.LatLng(stores[0].y, stores[0].x)
            : new kakao.maps.LatLng(lat, lng),
          level: 5
        };
        const map = new kakao.maps.Map(container, options);
        setMap(map);
        setKakaoObj(kakao);
      });
    };
  }, [lat, lng, stores]);

  return { map, kakao: kakaoObj };
};
