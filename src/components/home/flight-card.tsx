"use client";

import CardLayout from "./card-layout";
import { FlightCardProps } from "./home.interface";

function formatDateTime(date: string) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatDateDay(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

function FlightCard(props: FlightCardProps) {
  const endDate = new Date(
    new Date(props.startTime).getTime() + props.durationMins * 60000
  ).toISOString();

  return (
    <CardLayout action={() => alert("Remove flight")}>
      <div className="w-full divide-y-2 space-y-4 px-4 py-2">
        <div className="flex md:flex-row flex-col justify-between gap-6">
          <div className="w-full flex justify-between">
            <div className="flex gap-3">
              <img
                src="/assets/american-airlines-symbolsvg.svg"
                alt="american airlines symbols icon"
                width={20}
              />
              <div className="flex flex-col items-start">
                <p className="text-xl font-semibold">{props.name}</p>

                <div className="flex items-center w-full">
                  <span className="text-text-black-secondary1">
                    {props.code}
                  </span>
                  <img src="/assets/dot.svg" alt="dot icon" />
                  <button className="w-fit bg-midnightblue text-white text-xs p-2 rounded">
                    {props.suite}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold text-2xl">
                {formatDateTime(props.startTime)}
              </p>
              <p className="font-semibold text-sm text-text-black-secondary1">
                {formatDateDay(props.startTime)}
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full flex justify-between items-center">
              <img
                src="/assets/airplanetakeoff.svg"
                alt="airplane take off icon"
              />
              <span className="text-text-black-secondary1">
                Duration: {Math.floor(props.durationMins / 60)}h{" "}
                {props.durationMins % 60}m
              </span>
              <img
                src="/assets/airplanelanding.svg"
                alt="airplane landing icon"
              />
            </div>

            <progress
              className="w-full h-2 rounded-xl [&::-webkit-progress-bar]:rounded-lg [&::-moz-progress-bar]:rounded-lg"
              value={50}
              max={100}
            ></progress>

            <div className="w-full flex justify-between items-center">
              <span className="uppercase font-medium">{props.from}</span>
              <span className="text-text-black-secondary1">Direct</span>
              <span className="uppercase font-medium">{props.to}</span>
            </div>
          </div>

          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-2xl">
                {formatDateTime(endDate)}
              </p>
              <p className="font-semibold text-sm text-text-black-secondary1">
                {formatDateDay(endDate)}
              </p>
            </div>

            <p className="text-text-black-primary font-semibold md:text-2xl lg:text-3xl text-xl">
              &#8358; {props.price.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="text-text-black-secondary1 flex flex-wrap gap-2 pt-6">
          <span>Facilities:&nbsp;</span>

          <img src="/assets/suitcaserolling-1.svg" alt="suitcase rolling" />
          <span>
            Baggage: {props.loadWeightKg}kg, Cabin baggage:{" "}
            {props.cabinBaggageWeightKg}kg&nbsp;
          </span>

          <img src="/assets/filmslate.svg" alt="film state icon" />
          <span>In flight entertainment</span>

          <img src="/assets/forkknife.svg" alt="fork knife icon" />
          <span>In flight meal</span>

          <img src="/assets/usb.svg" alt="usb icon" />
          <span>USB Port</span>
        </div>

        <div className="flex justify-between items-center pt-4 font-medium">
          <div className="flex gap-6">
            <button className="text-primary-600 p-2">Flight details</button>
            <button className="text-primary-600 p-2">Price Details</button>
          </div>

          <button className="text-primary-600 p-2">Edit details</button>
        </div>
      </div>
    </CardLayout>
  );
}

export default FlightCard;
