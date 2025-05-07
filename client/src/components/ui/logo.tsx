import { Link } from "wouter";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center cursor-pointer">
        <img src="/static/logo.png" alt="TF Logo" className="h-10" />
      </div>
    </Link>
  );
};

export default Logo;
