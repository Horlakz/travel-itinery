import ActivityCreate from "./_components/activity-create";
import FlightCreate from "./_components/flight-create";
import HotelCreate from "./_components/hotel-create";
import { PlanCard } from "./plan.interface";

export const tripBuddies = [
  { name: "Jane Doe", image: "/assets/1@2x.png" },
  { name: "John Doe", image: "/assets/1-1@2x.png" },
  { name: "John Doe", image: "/assets/2@2x.png" },
];

export const createComponents: Record<PlanCard, React.FC> = {
  hotels: HotelCreate,
  activities: ActivityCreate,
  flights: FlightCreate,
};

export function generateId() {
  return `id-${Math.random().toString(36).substr(2, 9)}`;
}
