"use client";

import About from "@/app/plan/_components/about";
import HotelCard from "@/app/plan/_components/hotel-card";
import InfoCard from "@/app/plan/_components/info-card";
import ListLayout from "@/app/plan/_components/list-layout";
import { ArrowLeftIcon } from "@/components/icons/arrow-left";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ActivityCard from "./_components/activity-card";
import FlightCard from "./_components/flight-card";

function PlanPage() {
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
          data={[
            {
              name: "Flight to NYC",
              code: "NYC123",
              durationMins: 300,
              suite: "Economy",
              startTime: "2023-10-01T10:00:00Z",
              price: 145000,
              loadWeightKg: 25,
              cabinBaggageWeightKg: 8,
              from: "LAX",
              to: "JFK",
            },
          ]}
          btnTextColor="text-primary-600"
          listItem={(data) => <FlightCard {...data} />}
        />

        <ListLayout
          title="Hotels"
          href="/hotels"
          icon="/assets/warehouse.svg"
          bgColor="bg-neutral-900"
          data={[
            {
              name: "Hotel California",
              address: "123 Sunset Blvd, Los Angeles, CA",
              rating: 4.5,
              reviewsCount: 120,
              roomType: "Deluxe Suite",
              pricePerNight: 20000,
              totalPrice: 60000,
              nights: 3,
              checkInDate: "2023-10-01T15:00:00Z",
              checkOutDate: "2023-10-04T11:00:00Z",
              facilities: ["Free WiFi", "Pool", "Gym"],
              imageUrl: "/assets/hotel.jpg",
            },
          ]}
          listItem={(data) => <HotelCard {...data} />}
          btnTextColor="text-white"
        />

        <ListLayout
          title="Activities"
          href="/activities"
          icon="/assets/roadhorizon-1.svg"
          bgColor="bg-primary-700"
          data={[
            {
              title: "Museum Tour",
              description: "Explore the art and history of the city.",
              mapUrl: "https://maps.google.com",
              rating: 4.8,
              reviewsCount: 200,
              duration: "2 hours",
              whatsIncluded: ["Guided Tour", "Entry Ticket"],
              startTime: "2023-10-01T09:00:00Z",
              price: 5000,
              dayTag: "Day 1",
              imageUrl: "/assets/activity.jpg",
            },
          ]}
          btnTextColor="text-primary-600"
          listItem={(data) => <ActivityCard {...data} />}
        />
      </div>
    </>
  );
}

export default PlanPage;
