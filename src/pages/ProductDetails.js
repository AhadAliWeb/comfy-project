import { Link, useParams } from "react-router-dom";
import img1 from "../assets/extra-product-1.jpeg";
import img2 from "../assets/extra-product-2.jpeg";
import img3 from "../assets/extra-product-3.jpeg";
import img4 from "../assets/extra-product-4.jpeg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import PageHeader from "../components/pageHeader";
import { useGlobalContext } from "./Context";
import { useState } from "react";

const ProductDetails = () => {
  const { products } = useGlobalContext();
  const { productId } = useParams();
  const product = products.find((pro) => pro.id === productId);
  const [imgSrc, setImgSrc] = useState(null);
  const [amount, setAmount] = useState(1);
  const [color, setColor] = useState(null);

  if (!product) {
    return <h2>Loading...</h2>;
  }
  const { name, id, price, image, description, colors, company } = product;

  const addDataToLocalStorage = () => {
    const finalColor = color ? color : colors[0];
    const completeData = { ...product, amount, color: finalColor };

    let existingData = [];
    const existingDataAsString = localStorage.getItem("cart");

    if (existingDataAsString) {
      existingData = JSON.parse(existingDataAsString);
      // localStorage.setItem("cart", JSON.stringify(checkDuplicate));
    }

    const checkDuplicate = existingData.some(
      (item) => item.id === id && item.color === finalColor
    );

    if (checkDuplicate) {
      const updateData = existingData.map((item) => {
        return item.id === id && item.color === finalColor
          ? { ...product, amount: item.amount + amount, color: finalColor }
          : item;
      });
      const updateDataAsString = JSON.stringify(updateData);
      localStorage.setItem("cart", updateDataAsString);
    } else {
      existingData.push(completeData);
      const updatedDataAsString = JSON.stringify(existingData);
      localStorage.setItem("cart", updatedDataAsString);
    }
  };

  return (
    <section className="product-details">
      <PageHeader title={name} link="/products" />
      <div className="container">
        <Link to="/products" className="btn back-to-products">
          BACK TO PRODUCTS
        </Link>
        <div className="product-details-main">
          <div className="product-detail-images">
            <img src={imgSrc ? imgSrc : image} alt="" className="main-img" />
            <div className="small-img-div">
              <img
                src={image}
                alt=""
                className="small-img"
                onClick={(e) => setImgSrc(e.target.src)}
              />
              <img
                src={img1}
                alt=""
                className="small-img"
                onClick={(e) => setImgSrc(e.target.src)}
              />
              <img
                src={img2}
                alt=""
                className="small-img"
                onClick={(e) => {
                  setImgSrc(e.target.src);
                }}
              />
              <img
                src={img3}
                alt=""
                className="small-img"
                onClick={(e) => setImgSrc(e.target.src)}
              />
              <img
                src={img4}
                alt=""
                className="small-img"
                onClick={(e) => setImgSrc(e.target.src)}
              />
            </div>
          </div>
          <div className="product-details-text">
            <h3 className="product-details-text-heading">{name}</h3>
            <div className="stars">
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <FaRegStarHalfStroke />
              </span>
              <span>
                <AiOutlineStar />
              </span>
              <span>
                <AiOutlineStar />
              </span>
              <span className="reviews">(100 customer reviews)</span>
            </div>
            <p className="price">${price / 100}</p>
            <p className="description">{description}</p>
            <div className="info">
              <p>
                <span className="bold">Available: </span> In Stock
              </p>
              <p>
                <span className="bold">SKU: </span> {id}
              </p>
              <p>
                <span className="bold">Brand: </span> {company}
              </p>
            </div>

            <span className="underline"></span>

            <p className="color">
              <span className="bold">Colors: </span>
              {colors.map((color, index) => {
                return (
                  <button
                    key={index}
                    className="color-sel"
                    data-color={color}
                    onClick={() => setColor(color)}
                    style={{ backgroundColor: `${color}` }}
                  ></button>
                );
              })}
            </p>

            <div className="buttons-div">
              <button
                type="button"
                className="decrease"
                onClick={() => {
                  if (amount === 1) return;
                  setAmount(amount - 1);
                }}
              >
                <BiMinus />
              </button>
              <span> {amount} </span>
              <button
                type="button"
                className="increase"
                onClick={() => setAmount(amount + 1)}
              >
                <BiPlus />
              </button>
            </div>
            <Link
              to="/cart"
              className="btn add-to-cart"
              onClick={addDataToLocalStorage}
            >
              ADD TO CART
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDetails;
