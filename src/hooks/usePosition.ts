import { useState } from "react";
import { LatLngTuple } from "leaflet";

const usePosition = () => {
  const [position, setPosition] = useState<LatLngTuple | undefined>();

  const updatePosition = (newPosition: LatLngTuple) => {
    setPosition(newPosition);
  };

  return { position, updatePosition };
};

export default usePosition;
