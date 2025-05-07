import { Link } from "wouter";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center cursor-pointer">
        {/* Встроенный SVG логотип, чтобы избежать проблем с импортом */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-purple-700"
        >
          <path
            d="M8 8H32V12H22V32H18V12H8V8Z"
            fill="currentColor"
          />
          <path
            d="M26 18H36V22H26V18Z"
            fill="currentColor"
          />
        </svg>
        <span className="ml-1 font-bold text-purple-700 text-xl">TF</span>
      </div>
    </Link>
  );
};

export default Logo;
