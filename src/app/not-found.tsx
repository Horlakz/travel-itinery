import BoxStackIcon from "@/components/icons/box-stack";
import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100">
      <BoxStackIcon />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="text-lg text-gray-600 mt-4">
        Go back&nbsp;
        <Link
          href="/"
          className="font-semibold text-primary-600 hover:underline"
        >
          Home
        </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
