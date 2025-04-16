import { Link } from "wouter";
import logoImage from "../../assets/logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center text-primary cursor-pointer">
        <img src={logoImage} alt="TE Logo" className="h-10" />
      </div>
    </Link>
  );
};

export default Logo;
