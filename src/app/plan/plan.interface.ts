export interface FlightCardProps {
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
