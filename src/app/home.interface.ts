import { JSX } from "react";
import { PlanCard } from "./plan/plan.interface";

export interface InfoCardTheme {
  bg: string;
  text: string;
  buttonBg: string;
  buttonTextColor: string;
}

export interface InfoCardProps {
  title: PlanCard;
  description: string;
  theme: InfoCardTheme;
}

export interface ListLayoutProps<T> {
  title: PlanCard;
  icon: string;
  bgColor: string;
  btnTextColor?: string;
  data: T[];
  listItem: (data: T) => JSX.Element;
  href: string;
}
