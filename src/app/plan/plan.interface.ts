export interface FlightCardProps {
  id: string;
  name: string;
  code: string;
  durationMins: number;
  suite: string;
  startTime: string;
  price: number;
  loadWeightKg: number;
  cabinBaggageWeightKg: number;
  from: string;
  to: string;
}

export interface HotelCardProps {
  id: string;
  name: string;
  address: string;
  mapUrl?: string;
  rating: number;
  reviewsCount: number;
  roomType: string;
  pricePerNight: number;
  totalPrice: number;
  nights: number;
  checkInDate: string;
  checkOutDate: string;
  facilities: string[];
  imageUrl: string;
}

export interface ActivityCardProps {
  id: string;
  title: string;
  description: string;
  mapUrl?: string;
  rating: number;
  reviewsCount: number;
  duration: string;
  whatsIncluded: string[];
  startTime: string;
  price: number;
  dayTag: string;
  imageUrl: string;
}
