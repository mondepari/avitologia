import { Link } from "wouter";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center text-primary cursor-pointer">
        <img src="/src/assets/logo.png" alt="TE Logo" className="h-10" />
      </div>
    </Link>
  );
};

export default Logo;
