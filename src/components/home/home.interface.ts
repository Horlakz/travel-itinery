import { JSX } from "react";

export interface InfoCardTheme {
  bg: string;
  text: string;
  buttonBg: string;
  buttonTextColor: string;
}

export interface InfoCardProps {
  title: string;
  description: string;
  theme: InfoCardTheme;
}

export interface ListLayoutProps<T = unknown> {
  title: string;
  icon: string;
  bgColor: string;
  btnTextColor?: string;
  data: T[];
  listItem: (data: T) => JSX.Element;
  href: string;
}

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
