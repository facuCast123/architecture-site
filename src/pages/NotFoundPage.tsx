import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-y-8 text-6xl">
      <h1 className="font-thin opacity-30 uppercase">404 Page Not Found</h1>

      <Link className="relative font-semibold group" to="/">
        Go back to the homepage
        <span className="absolute -bottom-[5px] left-0 w-[100%] h-[0.05em] bg-black scale-0 origin-center duration-300 group-hover:scale-100"></span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
