"use client";

import BasketIcon from "../icons/basket";
import BellIcon from "../icons/bell";
import ChartPieSliceIcon from "../icons/chart-pie-slice";
import HandCoins from "../icons/handcoins";
import HouseIcon from "../icons/house";
import ListChecksIcon from "../icons/listchecks";
import PlusSquareIcon from "../icons/plus-square";
import WalletIcon from "../icons/wallet";

export const headerItems = [
  { name: "Home", route: "/", icon: HouseIcon },
  { name: "Dashboard", route: "/dashboard", icon: ChartPieSliceIcon },
  { name: "Wallet", route: "/wallet", icon: WalletIcon },
  { name: "Plan Trip", route: "/plan", icon: ListChecksIcon },
  {
    name: "Commission for Life",
    route: "/commission-for-life",
    icon: HandCoins,
  },
  { name: "Notification", route: "/notification", icon: BellIcon },
  { name: "Cart", route: "/cart", icon: BasketIcon },
  { name: "Create", route: "/create", icon: PlusSquareIcon },
];

export const navitems = [
  { name: "Activities", icon: "/assets/roadhorizon.svg" },
  { name: "Hotels", icon: "/assets/buildings.svg" },
  { name: "Flights", icon: "/assets/airplanetilt.svg" },
  { name: "Study", icon: "/assets/student.svg" },
  { name: "Visa", icon: "/assets/newspaperclipping.svg" },
  { name: "Immigration", icon: "/assets/suitcaserolling.svg" },
  { name: "Medical", icon: "/assets/firstaidkit.svg" },
  { name: "Vacation Packages", icon: "/assets/package.svg" },
];

export const tripBuddies = [
  { name: "Jane Doe", image: "/assets/1@2x.png" },
  { name: "John Doe", image: "/assets/1-1@2x.png" },
  { name: "John Doe", image: "/assets/2@2x.png" },
];
