import { Button } from "../ui/button";

function About() {
  return (
    <div className="w-full flex md:flex-row flex-col justify-between md:items-center items-start py-4">
      <div>
        <div className="py-1 px-2 gap-1 w-fit flex items-center bg-secondary-100 text-secondary-900 text-sm">
          <img src="/assets/calendarblank.svg" alt="calendar blank icon" />
          <span>21 March 2024</span>
          <img src="/assets/arrowright.svg" alt="arrow right icon" />
          <span>21 April 2024</span>
        </div>
        <p className="text-2xl font-semibold">Bahamas Family Trip</p>
        <p className="font-medium text-text-black-secondary1">
          New York, United States of America{" "}
          <span className="font-light">|</span> Solo Trip
        </p>
      </div>

      <div className="font-medium flex items-center gap-4">
        <Button
          size="lg"
          className="bg-primary-100 text-base text-primary-600 px-20"
        >
          <img src="/assets/userplus.svg" alt="user plus icon" />
        </Button>

        <img src="/assets/dotsthree.svg" alt="dot three icon" />
      </div>
    </div>
  );
}

export default About;
