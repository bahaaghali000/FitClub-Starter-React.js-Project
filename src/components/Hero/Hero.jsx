import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";

export const Hero = () => {
  const transistion = { type: "spring", duration: 3 };

  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* The best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "9px" }}
            transition={{ ...transistion, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* Hero Heading */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "10rem" }}
          transition={transistion}
          className="hero-text"
        >
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </motion.div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        {/* Hero btns */}
        <div className="hero-btns">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      {/* Right side */}
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transistion}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
      </div>
      {/* Hero Images */}
      <img src={hero_image} alt="Hero" className="hero-image" />
      <motion.img
        initial={{ right: "11rem" }}
        whileInView={{ right: "20rem" }}
        transition={transistion}
        src={hero_image_back}
        alt=""
        className="hero-image-back"
      />
      <img src="" alt="" />
      {/* Calories */}
      <motion.div
        initial={{ right: "37rem" }}
        whileInView={{ right: "28rem" }}
        transition={transistion}
        className="calories"
      >
        <img src={calories} alt="" />
        <div>
          <span>Calories burned</span>
          <span>220 kcal</span>
        </div>
      </motion.div>
    </div>
  );
};
