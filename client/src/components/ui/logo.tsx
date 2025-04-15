import { Link } from "wouter";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center text-primary cursor-pointer">
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tighter leading-none">STEP IN</span>
          <span className="text-xl font-normal tracking-tighter leading-none">CONTEXT</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
