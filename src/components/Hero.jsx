import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col  ${styles.paddingY}`}>
      <Carousel />
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
