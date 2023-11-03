import { Link } from "react-router-dom";

const pageHeader = ({ title, link }) => {
  return (
    <div className="about-header">
      <div className="container">
        <h2 className="about-title">
          <Link to="/">Home </Link>
          {link && <Link to="/products">/ Products </Link>}
          <span>/ {title}</span>
        </h2>
      </div>
    </div>
  );
};
export default pageHeader;
