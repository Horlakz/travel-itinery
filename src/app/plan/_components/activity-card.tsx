import Image from "next/image";

import { useGlobalContext } from "@/providers/global.context";
import { ActivityCardProps } from "../plan.interface";
import CardLayout from "./card-layout";

function ActivityCard(props: ActivityCardProps) {
  const { removeActivity } = useGlobalContext();

  return (
    <CardLayout action={() => removeActivity(props.id)}>
      <div className="w-full flex items-center p-4">
        <div className="hidden md:block relative">
          <img
            src="/assets/caretcircleright.svg"
            alt="caret circle icon"
            className="absolute left-2 top-1/2 -translate-y-1/2"
          />
          <img
            src="/assets/caretcircleright-1.svg"
            alt="caret circle icon"
            className="absolute right-2 top-1/2 -translate-y-1/2"
          />
          <Image
            src="/assets/rectangle-3437@2x.png"
            alt="hotel image"
            width={230}
            height={224}
          />
        </div>

        <div className="w-full h-full flex flex-col justify-between px-2 py-1 ">
          <div className="flex md:flex-row flex-col justify-between items-start">
            <div className="md:w-3/5">
              <p className="text-xl font-semibold">{props.title}</p>
              <p className="font-medium text-text-black-primary">
                {props.description}
              </p>
              <div className="flex gap-1.5">
                <img src="/assets/mappin.svg" alt="map pin icon" />
                <span className="text-primary-600">Directions</span>

                <img src="/assets/star.svg" alt="star icon" />
                <span className="text-text-black-secondary1">
                  {props.rating} ({props.reviewsCount})
                </span>

                <img src="/assets/clock.svg" alt="bed icon" />
                <span>{props.duration}</span>
              </div>
            </div>
            <div className="text-text-black-primary w-fit flex flex-col items-end">
              <p className="font-semibold text-3xl">&#8358; {props.price}</p>
              {props.startTime && (
                <span>
                  {new Date(props.startTime)
                    .toLocaleString("en-US", {
                      hour: "numeric",
                      minute: undefined,
                      hour12: true,
                      month: "long",
                      day: "numeric",
                    })
                    .replace(/:00 /, " ")
                    .replace(/(\d+)(am|pm)/, "$1$2")
                    .replace(
                      /(\w+) (\d+),/,
                      (_, month, day) => `${month.toLowerCase()} ${day}`
                    )}
                </span>
              )}
            </div>
          </div>

          <div className="text-text-black-secondary1 flex md:flex-row flex-col justify-between items-center pt-2">
            <div className="flex md:flex-row flex-col w-full gap-2 font-medium">
              <span>What&#39;s Included:&nbsp;</span>

              <span>Admission to the Empire State Building&nbsp;</span>

              <a href="#" className="text-primary-600">
                See more
              </a>
            </div>

            <div className="flex md:flex-row flex-col justify-end items-center w-1/4 gap-2">
              <button className="bg-midnightblue text-white py-1 px-2 h-fit rounded">
                Day 1
              </button>
              <div className="md:grid flex gap-4">
                <img
                  src="/assets/caretcircleup.svg"
                  alt="caret circle up icon"
                />
                <img
                  src="/assets/caretcircledown.svg"
                  alt="caret circle down icon"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 font-medium">
            <div className="flex gap-6">
              <button className="text-primary-600">Activity details</button>
              <button className="text-primary-600">Price Details</button>
            </div>

            <button className="text-primary-600">Edit details</button>
          </div>
        </div>
      </div>
    </CardLayout>
  );
}

export default ActivityCard;
