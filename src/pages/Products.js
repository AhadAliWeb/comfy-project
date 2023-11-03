import { useState } from "react";
import { categories, colors } from "../components/Constants";
import PageHeader from "../components/pageHeader";
import { useGlobalContext } from "./Context";
import SingleProduct from "../components/SingleProduct";
import { BiSolidGridAlt } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";

const Products = () => {
  const { products, setProducts, originData } = useGlobalContext();
  const [category, setCategory] = useState("all");
  const [company, setCompany] = useState("all");
  const [color, setColor] = useState("all");
  const [price, setPrice] = useState("3099");
  const [proFound, setProFound] = useState(22);
  const [gridBtn, setGridBtn] = useState(true);

  const filByCom = () => {
    const filteredData = originData.current
      .filter((data) => {
        if (category === "all") {
          return data;
        }
        return category === data.category;
      })
      .filter((data) => {
        if (company === "all") {
          return data;
        }
        console.log(company);
        return data.company === company;
      })
      .filter((data) => {
        if (color === "all") {
          return data;
        }
        return data.colors.includes(color);
      })
      .filter((data) => {
        return price >= data.price / 100;
      });

    setProducts(filteredData);
    setProFound(filteredData.length);
  };
  return (
    <>
      <PageHeader title="Products" />
      <div className="container">
        <section className="products">
          <div className="filter-section">
            <form>
              <div className="form-control">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search"
                  className="search-input"
                />
              </div>
              <div className="form-control category-select">
                <h5>Category</h5>
                {categories.map((cat) => {
                  return (
                    <div key={cat.id}>
                      <button
                        type="button"
                        data-category={cat.category}
                        onClick={(e) => setCategory(e.target.dataset.category)}
                      >
                        {cat.text}
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="form-control">
                <h5>Company</h5>
                <select
                  name=""
                  id=""
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                >
                  <option value="all">All</option>
                  <option value="marcos">Marcos</option>
                  <option value="liddy">Liddy</option>
                  <option value="ikea">Ikea</option>
                  <option value="caressa">Caressa</option>
                </select>
              </div>

              <h5>Colors</h5>
              <div className="form-control color-select">
                <button
                  type="button"
                  data-color="all"
                  className=" 
                all-btn"
                  onClick={(e) => setColor(e.target.dataset.color)}
                >
                  All
                </button>
                {colors.map((button) => {
                  return (
                    <button
                      key={button.id}
                      type="button"
                      data-color={button.dataColor}
                      className={`btn ${button.class}`}
                      onClick={(e) => setColor(e.target.dataset.color)}
                    ></button>
                  );
                })}
              </div>

              <div className="form-control">
                <h5>Price</h5>
                <div className="price-range">
                  <p className="price">${price}</p>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    min="0"
                    max="3099"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-control free-shipping">
                <label htmlFor="free">Free Shipping</label>
                <input type="checkbox" name="freeShipping" id="free" />
              </div>
              <div className="form-control">
                <button type="button" className="apply-btn" onClick={filByCom}>
                  Apply Filters
                </button>
                <button type="reset" className="reset-btn">
                  Reset Filters
                </button>
              </div>
            </form>
          </div>
          <div className="sort-products">
            <div className="sort-by">
              <button className="grid-btn" onClick={() => setGridBtn(true)}>
                <BiSolidGridAlt />
              </button>
              <button
                className="list-btn"
                onClick={(e) => {
                  setGridBtn(false);
                }}
              >
                <RxHamburgerMenu />
              </button>
              <p>{proFound} Products Found</p>
              <span className="middle-line"></span>
              <p className="text">Sort By</p>
              <select name="" id="" defaultValue="a-z">
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
                <option value="a-z">Name (A-Z)</option>
                <option value="z-a">Name (Z-A)</option>
              </select>
            </div>
            <div className="products-listing">
              {proFound ? (
                products.map((product) => {
                  return (
                    <SingleProduct
                      {...product}
                      key={product.id}
                      gridBtn={gridBtn}
                    />
                  );
                })
              ) : (
                <h3>Sorry, No Products Found</h3>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Products;
