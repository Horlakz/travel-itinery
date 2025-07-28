import ActivityCreate from "./_components/activity-create";
import FlightCreate from "./_components/flight-create";
import HotelCreate from "./_components/hotel-create";

export const tripBuddies = [
  { name: "Jane Doe", image: "/assets/1@2x.png" },
  { name: "John Doe", image: "/assets/1-1@2x.png" },
  { name: "John Doe", image: "/assets/2@2x.png" },
];

export const createCompnents = {
  hotels: HotelCreate,
  activites: ActivityCreate,
  flights: FlightCreate,
};
