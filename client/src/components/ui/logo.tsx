import { Link } from "wouter";
import logoImage from "../../assets/logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center text-primary cursor-pointer">
        <img src={logoImage} alt="TE Logo" className="h-10 mr-2" />
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tighter leading-none">STEP IN</span>
          <span className="text-xl font-normal tracking-tighter leading-none">CONTEXT</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
