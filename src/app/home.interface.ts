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

export interface ListLayoutProps<T> {
  title: string;
  icon: string;
  bgColor: string;
  btnTextColor?: string;
  data: T[];
  listItem: (data: T) => JSX.Element;
  href: string;
}
