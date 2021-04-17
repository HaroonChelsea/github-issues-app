import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <diV className="mx-auto text-gray-800  text-center font-bold text-3xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-24 w-24 text-red-500 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      Oops Page not found!
      <Link
        to="/"
        className="bg-blue-200 text-blue-700 ml-2 rounded-lg py-2 px-5"
      >
        Home
      </Link>
    </diV>
  );
}
