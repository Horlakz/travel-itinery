import MarkAltIcon from "@/components/icons/mark-alt";
import PlaneIcon from "@/components/icons/plane";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to Travel Itinerary</h1>
      <div className="flex space-x-4 mb-8">
        <PlaneIcon />
        <MarkAltIcon />
      </div>
      <Link href="/plan" className="text-blue-500 underline text-lg">
        Plan your trip
      </Link>
    </div>
  );
}
