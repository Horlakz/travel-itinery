"use client";

import BasketIcon from "../components/icons/basket";
import BellIcon from "../components/icons/bell";
import ChartPieSliceIcon from "../components/icons/chart-pie-slice";
import HandCoins from "../components/icons/handcoins";
import HouseIcon from "../components/icons/house";
import ListChecksIcon from "../components/icons/listchecks";
import PlusSquareIcon from "../components/icons/plus-square";
import WalletIcon from "../components/icons/wallet";

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
