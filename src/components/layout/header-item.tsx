"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface HeaderItemProps {
  icon: React.ComponentType<{ color: string }>;
  label: string;
  route: string;
}

function HeaderItem(props: HeaderItemProps) {
  const pathname = usePathname();

  return (
    <Link href={props.route} className="text-nav-text flex-col-center gap-1">
      {<props.icon color={props.route == pathname ? "black" : "#667185"} />}
      <span className={props.route == pathname ? "font-semibold" : ""}>
        {props.label}
      </span>
    </Link>
  );
}

export default HeaderItem;
