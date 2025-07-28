"use client";

import { navitems } from "../home/home.constant";

function NavBar() {
  return (
    <nav className="w-[20%] bg-white p-4 lg:block hidden">
      <ul className="space-y-8">
        {navitems.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-text-black-secondary"
          >
            <img src={item.icon} alt={item.name} />
            <span className="font-medium">{item.name}</span>
          </li>
        ))}
      </ul>

      <div className="mt-16 py-3 px-2 flex items-center gap-1.5 bg-neutral-300">
        <p className="p-2 h-fit bg-primary-600 text-white rounded">Go</p>
        <span className="text-text-black-secondary font-semibold text-xs mr-2">
          Personal Account
        </span>
        <img src="/assets/caretupdown.svg" alt="caret up down icon" />
      </div>
    </nav>
  );
}

export default NavBar;
