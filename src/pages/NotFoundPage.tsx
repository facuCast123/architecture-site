import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-5xl">
      <h1>404 Not Found</h1>

      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default NotFoundPage;
