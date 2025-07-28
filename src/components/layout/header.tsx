"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { headerItems } from "../home/home.constant";
import Search from "../home/search";
import HeaderItem from "./header-item";

function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-white py-4 md:px-10 px-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link href="/" className="cursor-pointer">
          <img src="/assets/logo.png" alt="logo" />
        </Link>

        <Search />
      </div>

      <div className="flex gap-6 lg:divide-x-2 divide-text-black-secondary/35">
        <div className="hidden lg:flex justify-end items-center gap-6">
          {headerItems.slice(0, 5).map((item, i) => (
            <HeaderItem
              key={i}
              icon={item.icon}
              label={item.name}
              route={item.route}
            />
          ))}
        </div>

        <div className="flex items-center gap-3 pl-6">
          <div className="hidden md:flex items-center gap-6">
            <Button>Subscribe</Button>

            {headerItems.slice(5, headerItems.length).map((item, i) => (
              <HeaderItem
                key={i}
                icon={item.icon}
                label={item.name}
                route={item.route}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <Image
              src="/assets/ellipse-775@2x.png"
              alt="profile"
              width={52}
              height={52}
            />
            <img src="/assets/caretdown.svg" alt="icon" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
