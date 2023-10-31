const featured = () => {
  return (
    <section className="featured">
      <div className="container featured-container">
        <h2 className="featured-title">Featured Products</h2>
        <div className="featured-underline"></div>
        <div className="featured-products">
          <div className="featured-product">
            <img
              src="https://www.course-api.com/images/store/product-7.jpeg"
              alt=""
            />
            <div className="featured-text">
              <p>Entertainment Center</p>
              <p className="featured-product-price">$599.99</p>
            </div>
          </div>

          <div className="featured-product">
            <img
              src="https://www.course-api.com/images/store/product-8.jpeg"
              alt=""
            />
            <div className="featured-text">
              <p>High-Back Bench</p>
              <p className="featured-product-price">$399.99</p>
            </div>
          </div>

          <div className="featured-product">
            <img
              src="https://www.course-api.com/images/store/product-11.jpeg"
              alt=""
            />
            <div className="featured-text">
              <p>Modern Bookshelf</p>
              <p className="featured-product-price">$319.99</p>
            </div>
          </div>
        </div>
        <div className="all-products-div">
          <a href="#" className="all-product-btn btn">
            All Products
          </a>
        </div>
      </div>
    </section>
  );
};
export default featured;
