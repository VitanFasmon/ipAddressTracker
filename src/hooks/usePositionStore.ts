import { LatLngTuple } from "leaflet";
import { create } from "zustand";

interface PositionState {
  position: LatLngTuple | undefined | null;
  updatePosition: (newPosition: LatLngTuple | null) => void;
}

export const usePositionStore = create<PositionState>((set) => ({
  position: undefined,
  updatePosition: (newPosition: LatLngTuple | null) =>
    set(() => ({ position: newPosition })),
}));
