import { Link } from "wouter";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center cursor-pointer">
        <div className="text-purple-700 font-bold text-xl">TF Logo</div>
      </div>
    </Link>
  );
};

export default Logo;
