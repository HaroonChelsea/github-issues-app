import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-gray-800 shadow mb-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center h-16">
          <Logo />
          <Link to="/" className="my-5 mx-4 text-white font-bold text-xl">
            Github Issues
          </Link>
        </div>
      </div>
    </nav>
  );
}
