"use client";

import { createContext, ReactNode, useContext, useState } from "react";

import {
    ActivityCardProps,
    FlightCardProps,
    HotelCardProps,
    PlanCard,
} from "@/app/plan/plan.interface";

interface GlobalContextType {
  hotels: HotelCardProps[];
  activities: ActivityCardProps[];
  flights: FlightCardProps[];
  modalVisibility: boolean;
  type: PlanCard;

  setModalVisibility: (isVisible: boolean) => void;
  setType: (type: PlanCard) => void;

  addHotel: (hotel: HotelCardProps) => void;
  addActivity: (activity: ActivityCardProps) => void;
  addFlight: (flight: FlightCardProps) => void;

  removeHotel: (id: string) => void;
  removeActivity: (id: string) => void;
  removeFlight: (id: string) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [hotels, setHotels] = useState<HotelCardProps[]>([]);
  const [activities, setActivities] = useState<ActivityCardProps[]>([]);
  const [flights, setFlights] = useState<FlightCardProps[]>([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [type, setType] = useState<PlanCard>("hotels");

  const addHotel = (hotel: HotelCardProps) =>
    setHotels((prev) => [...prev, hotel]);
  const addActivity = (activity: ActivityCardProps) =>
    setActivities((prev) => [...prev, activity]);
  const addFlight = (flight: FlightCardProps) =>
    setFlights((prev) => [...prev, flight]);

  const removeHotel = (id: string) =>
    setHotels((prev) => prev.filter((hotel) => hotel.id !== id));
  const removeActivity = (id: string) =>
    setActivities((prev) => prev.filter((activity) => activity.id !== id));
  const removeFlight = (id: string) =>
    setFlights((prev) => prev.filter((flight) => flight.id !== id));

  return (
    <GlobalContext.Provider
      value={{
        hotels,
        activities,
        flights,
        modalVisibility,
        type,
        setType,
        setModalVisibility,
        addHotel,
        addActivity,
        addFlight,
        removeHotel,
        removeActivity,
        removeFlight,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
