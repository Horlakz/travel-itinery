"use client";

import classNames from "classnames";
import Image from "next/image";
import { Fragment, JSX } from "react";

import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/providers/global.context";
import { ListLayoutProps } from "../../home.interface";
import ActivitiesEmptyIcon from "../_icons/activity-empty";
import FlightEmptyIcon from "../_icons/flight-empty";
import HotelEmptyIcon from "../_icons/hotel-empty";
import { PlanCard } from "../plan.interface";

const emptyIcons: Record<PlanCard, JSX.Element> = {
  activities: <ActivitiesEmptyIcon />,
  hotels: <HotelEmptyIcon />,
  flights: <FlightEmptyIcon />,
};

function ListLayout<T>(props: ListLayoutProps<T>) {
  const { setModalVisibility, setType } = useGlobalContext();

  return (
    <>
      <div className={classNames("space-y-4 p-4 my-4", props.bgColor)}>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Image
              src={props.icon}
              alt={props.title + " icon"}
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span
              className={classNames(
                "capitalize",
                props.bgColor === "bg-neutral-300" ? "text-black" : "text-white"
              )}
            >
              {props.title}
            </span>
          </div>

          <Button
            onClick={() => {
              setModalVisibility(true);
              setType(props.title);
            }}
            className={classNames(
              "bg-white text-sm rounded p-2 capitalize",
              props.btnTextColor ?? "text-black"
            )}
          >
            Add {props.title}
          </Button>
        </div>

        {props.data.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 bg-white">
            {emptyIcons[props.title] ?? <FlightEmptyIcon />}
            <span className="mb-4">No Request yet.</span>
            <Button
              onClick={() => {
                setModalVisibility(true);
                setType(props.title);
              }}
              className={classNames(
                "bg-primary-600 text-white text-sm flex-center rounded p-2 w-32 capitalize"
              )}
            >
              Add {props.title}
            </Button>
          </div>
        ) : (
          props.data.map((item, i) => (
            <Fragment key={i}>{props.listItem(item)}</Fragment>
          ))
        )}
      </div>
    </>
  );
}

export default ListLayout;
