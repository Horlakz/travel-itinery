"use client";

import About from "@/app/plan/_components/about";
import HotelCard from "@/app/plan/_components/hotel-card";
import InfoCard from "@/app/plan/_components/info-card";
import ListLayout from "@/app/plan/_components/list-layout";
import { ArrowLeftIcon } from "@/components/icons/arrow-left";
import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/providers/global.context";
import Image from "next/image";
import ActivityCard from "./_components/activity-card";
import FlightCard from "./_components/flight-card";

function PlanPage() {
  const { hotels, activities, flights } = useGlobalContext();

  return (
    <>
      <div className="w-full bg-white p-4">
        <div className="relative">
          <img src="/assets/banner.svg" alt="banner" />
          <Button className="bg-white/20 absolute top-5 left-5">
            <ArrowLeftIcon color="#111" />
          </Button>
        </div>

        <About />

        <div className="w-full flex justify-between items-start">
          <div className="md:flex hidden items-start gap-2">
            <InfoCard
              title="Activites"
              description="Build, personalize, and optimize your itineraries with our trip planner."
              theme={{
                bg: "bg-primary-1100",
                text: "text-white",
                buttonBg: "bg-primary-600",
                buttonTextColor: "text-white",
              }}
            />

            <InfoCard
              title="Hotels"
              description="Build, personalize, and optimize your itineraries with our trip planner."
              theme={{
                bg: "bg-primary-100",
                text: "text-black",
                buttonBg: "bg-primary-600",
                buttonTextColor: "text-white",
              }}
            />

            <InfoCard
              title="Flights"
              description="Build, personalize, and optimize your itineraries with our trip planner."
              theme={{
                bg: "bg-primary-600",
                text: "text-white",
                buttonBg: "bg-white",
                buttonTextColor: "text-primary-600",
              }}
            />
          </div>

          <div className="flex items-center px-2 divide-x-2">
            <Image
              src="/assets/1@2x.png"
              alt="user"
              className="w-10 h-10 object-cover rounded-full"
              width={40}
              height={40}
            />

            <div className="w-8 h-0.5 bg-primary-100"></div>

            <Image
              src="/assets/gearsix.svg"
              alt="gear six icon"
              className="p-3 border-2 border-primary-100 rounded-full"
              width={40}
              height={40}
            />
          </div>
        </div>

        <div className="flex flex-col justify-start items-start mt-20 pb-6">
          <p className="font-semibold text-xl">Trip Itineraries</p>
          <p className="font-medium text-sm text-text-black-secondary">
            Your trip itineraries are placed here
          </p>
        </div>

        <ListLayout
          title="Flights"
          href="/flights"
          icon="/assets/airplaneinflight.svg"
          bgColor="bg-neutral-300"
          btnTextColor="text-primary-600"
          data={flights}
          listItem={(data) => <FlightCard {...data} />}
        />

        <ListLayout
          title="Hotels"
          href="/hotels"
          icon="/assets/warehouse.svg"
          bgColor="bg-neutral-900"
          btnTextColor="text-black"
          data={hotels}
          listItem={(data) => <HotelCard {...data} />}
        />

        <ListLayout
          title="Activities"
          href="/activities"
          icon="/assets/roadhorizon-1.svg"
          bgColor="bg-primary-700"
          data={activities}
          btnTextColor="text-primary-600"
          listItem={(data) => <ActivityCard {...data} />}
        />
      </div>
    </>
  );
}

export default PlanPage;
