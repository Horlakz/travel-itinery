import About from "@/components/home/about";
import InfoCard from "@/components/home/info-card";
import { ArrowLeftIcon } from "@/components/icons/arrow-left";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function PlanPage() {
  return (
    <div className="w-full bg-white p-4">
      <div className="relative">
        <Image src="/assets/banner.svg" alt="banner" />
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
          <img
            src="/assets/1@2x.png"
            alt="user"
            className="w-10 h-10 object-cover rounded-full"
          />

          <div className="w-8 h-0.5 bg-primary-100"></div>

          <img
            src="/assets/gearsix.svg"
            alt="gear six icon"
            className="p-3 border-2 border-primary-100 rounded-full"
          />
        </div>
      </div>

      <div className="flex flex-col justify-start items-start mt-20 pb-6">
        <p className="font-semibold text-xl">Trip Itineraries</p>
        <p className="font-medium text-sm text-text-black-secondary">
          Your trip itineraries are placed here
        </p>
      </div>

      {/* <ListLayout
        title="Flights"
        href="/flights"
        icon="/assets/airplaneinflight.svg"
        bgColor="bg-neutral-300"
        data={flights}
        btnTextColor="text-primary-600"
        listItem={(data) => <FlightCard {...data} />}
      /> */}

      {/* <ListLayout
        title="Hotels"
        href="/hotels"
        icon="/assets/warehouse.svg"
        bgColor="bg-neutral-900"
        data={[...new Array(2)]}
        listItem={<HotelCard />}
      />

      <ListLayout
        title="Activities"
        href="/activities"
        icon="/assets/roadhorizon-1.svg"
        bgColor="bg-primary-700"
        data={[...new Array(3)]}
        btnTextColor="text-primary-600"
        listItem={<ActivityCard />}
      /> */}
    </div>
  );
}

export default PlanPage;
