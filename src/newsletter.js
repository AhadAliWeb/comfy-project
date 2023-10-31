const newsletter = () => {
  return (
    <div className="container">
      <section className="newsletter">
        <div className="newsletter-text">
          <h2>Join our newsletter and get 20% off</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet
            temporibus accusantium molestiae mollitia voluptatum.
          </p>
        </div>
        <div className="newsletter-form">
          <form action="">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
            <button type="submit" className="btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default newsletter;
