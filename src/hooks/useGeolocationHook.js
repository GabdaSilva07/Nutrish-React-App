import React, { useState, useEffect } from "react";

const useGeolocationHook = () => {
  const [location, setlocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  const onSuccess = (location) => {
    setlocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.latitude,
      },
    });
  };

  const onError = (error) => {
    setlocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  return location;
};


export default useGeolocationHook
