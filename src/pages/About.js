import image from "../assets/hero-bcg.jpeg";
import PageHeader from "../components/pageHeader";

const About = () => {
  return (
    <section className="about">
      <PageHeader title="About" />
      <div className="container">
        <div className="about-main">
          <img src={image} alt="" className="about-image" />
          <div className="about-main-text">
            <h2>Our Story</h2>
            <div className="underline"></div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
              iste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
