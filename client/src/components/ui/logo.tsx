import { Link } from "wouter";
import logoImage from "/src/assets/logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center cursor-pointer">
        <img src={logoImage} alt="TF Logo" className="h-10" />
      </div>
    </Link>
  );
};

export default Logo;
