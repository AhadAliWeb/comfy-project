import { cardData } from "./components/Constants";

const cards = () => {
  console.log(cardData);
  return (
    <section className="cards">
      <div className="container">
        <div className="card-header">
          <h2 className="card-title">
            Custom Furniture <br /> Build Only For You
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eos{" "}
            incidunt <br />
            officiis assumenda quidem vero a modi consequatur explicabo esse.
          </p>
        </div>
        <div className="card">
          {cardData.map((card) => {
            return (
              <div className="individual-card">
                <span className="card-icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default cards;
