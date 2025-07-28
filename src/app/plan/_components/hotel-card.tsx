import Image from "next/image";
import { HotelCardProps } from "../plan.interface";
import CardLayout from "./card-layout";

function HotelCard(props: HotelCardProps) {
  return (
    <CardLayout>
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
            src="/assets/hotel-sample.png"
            alt="hotel image"
            width={230}
            height={224}
          />
        </div>

        <div className="w-full h-full flex flex-col justify-between px-2">
          <div className="flex md:flex-row flex-col justify-between items-start">
            <div className="w-full">
              <p className="text-xl font-semibold">{props.name}</p>
              <p className="font-medium text-text-black-primary">
                {props.address}
              </p>
              <div className="flex gap-1.5">
                <img src="/assets/mappin.svg" alt="map pin icon" />
                <span className="text-primary-600">Show in map</span>

                <img src="/assets/star.svg" alt="star icon" />
                <span className="text-text-black-secondary1">
                  {props.rating} ({props.reviewsCount})
                </span>

                <img src="/assets/bed.svg" alt="bed icon" />
                <span>{props.roomType}</span>
              </div>
            </div>
            <div className="text-text-black-primary w-full flex flex-col items-end">
              <p className="font-semibold text-3xl">
                &#8358;{props.pricePerNight.toLocaleString()}
              </p>
              <p className="font-medium">
                Total Price: NGN {props.totalPrice.toLocaleString()}
              </p>
              <p className="font-medium">
                {props.nights} room &times; {props.nights} nights incl. taxes
              </p>
            </div>
          </div>

          <div className="text-text-black-secondary1 md:flex hidden justify-between mt-2 py-2.5 border-y border-[#E4E7EC]">
            <div className="flex w-full gap-2">
              <span>Facilities:&nbsp;</span>

              {props.facilities.map((facility) => (
                <div key={facility}>
                  <span>{facility}&nbsp;</span>
                </div>
              ))}
            </div>

            <div className="flex w-full gap-2">
              <img src="/assets/calendarblank-1.svg" alt="calendar icon" />
              <span>
                Check In:{" "}
                {new Date(props.checkInDate).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
                &nbsp;
              </span>

              <img src="/assets/calendarblank-1.svg" alt="calendar icon" />
              <span>
                Check Out:{" "}
                {new Date(props.checkOutDate).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-3 font-medium">
            <div className="flex gap-6">
              <button className="text-primary-600">Hotel details</button>
              <button className="text-primary-600">Price Details</button>
            </div>

            <button className="text-primary-600">Edit details</button>
          </div>
        </div>
      </div>
    </CardLayout>
  );
}

export default HotelCard;
