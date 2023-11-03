import { Link } from "react-router-dom";

const SingleProduct = ({ name, id, image, price, description, gridBtn }) => {
  return (
    <>
      {gridBtn ? (
        <div className="single-product">
          <Link to={`/products/${id}`}>
            <img src={image} alt="" className="single-product-image" />
          </Link>
          <div className="product-text">
            <p>{name}</p>
            <p className="product-price">${price / 100}</p>
          </div>
        </div>
      ) : (
        <div className="single-product-alone">
          <img src={image} alt="" className="single-product-image" />
          <div className="product-text-alone">
            <h3>{name}</h3>
            <p className="product-price">${price / 100}</p>
            <p>{description.slice(0, 150)} ...</p>
            <Link to={`/products/${id}`} className="btn">
              Details
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default SingleProduct;
