import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";
import { motion } from "framer-motion";
const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = React.useState(0);
  function rightClick() {
    {
      selected === testimonialsData.length - 1
        ? setSelected(0)
        : setSelected((prev) => prev + 1);
    }
  }
  function leftClick() {
    {
      selected === 0
        ? setSelected(testimonialsData.length - 1)
        : setSelected((prev) => prev - 1);
    }
  }
  return (
    <div className="testimonials" id="testimonials">
      <div className="left-side">
        <span>TESTIMONIALS</span>
        <span className="stroke-text">WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <span>{testimonialsData[selected].review}</span>
        <span style={{ color: "var(--orange)" }}>
          {testimonialsData[selected].name}{" "}
          <span style={{ color: "white ", fontWeight: "normal" }}>
            - {testimonialsData[selected].status}
          </span>
        </span>
      </div>
      <div className="right-s">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrows">
          <img src={leftArrow} onClick={leftClick} alt="" />
          <img src={rightArrow} onClick={rightClick} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
