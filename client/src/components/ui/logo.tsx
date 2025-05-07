import { Link } from "wouter";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center cursor-pointer">
        <div className="font-bold text-2xl text-[#6200EE]">TF</div>
      </div>
    </Link>
  );
};

export default Logo;
