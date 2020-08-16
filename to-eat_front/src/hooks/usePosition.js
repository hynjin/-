import { useState, useEffect } from "react";

export const usePosition = () => {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [error, setError] = useState(null);

  const getPosition = ({ coords }) => {
    setPosition({
      lat: coords.latitude,
      lng: coords.longitude
    });
    console.log("lat", coords.latitude);
    console.log("lng", coords.longitude);
  };

  const onError = err => {
    setError(err.message);
  };

  const geo = navigator.geolocation;
  if (geo) {
    geo.getCurrentPosition(getPosition, onError);
  } else {
    alert("This browser does not allow geolocation!");
  }

  // useEffect(() => {
  //   const geo = navigator.geolocation;

  //   if (!geo) {
  //     setError("Geolocation is not executed!");
  //     return;
  //   }
  //   const watcher = geo.watchPosition(onChange, onError);
  //   return () => geo.clearWatch(watcher);
  // }, []);

  return { ...position, error };
};
