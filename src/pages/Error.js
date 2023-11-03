import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h2>This is an error Page</h2>
      <Link to="/" className="btn">
        {" "}
        Go Home
      </Link>
    </>
  );
};
export default Error;
