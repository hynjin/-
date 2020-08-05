import { useEffect, useState } from "react";
import { usePosition } from "./usePosition";

/*global kakao*/

export const useKakaoMap = () => {
  const { lat, lng } = usePosition();
  const [map, setMap] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=c866d88debcfde1904aae17a3af9d7ba&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(lat, lng),
          level: 3
        };
        const map = new kakao.maps.Map(container, options);
        setMap(map);
      });
    };
  }, [lat, lng]);

  return { map };
};
