import React from "react";
import "./Footer.css";
import github from "../../assets/github.png";
import insta from "../../assets/instagram.png";
import linkedIn from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
import githubHover from "../../assets/github-hover.png";
import instaHover from "../../assets/instagramHover.png";
import linkedInHover from "../../assets/linkedinHover.png";
import { motion } from "framer-motion";
const Footer = () => {
  const [git, setImg] = React.useState(github);
  const [instagr, setInsta] = React.useState(insta);
  const [link, setLink] = React.useState(linkedIn);
  return (
    <footer>
      <hr />
      <div className="footer-container">
        <div className="links">
          <motion.img
            whileTap={{ scale: 1.2 }}
            src={git}
            onMouseOver={() => {
              setImg(githubHover);
            }}
            onMouseLeave={() => {
              setImg(github);
            }}
            alt=""
          />
          <motion.img
            whileTap={{ scale: 1.2 }}
            src={instagr}
            onMouseOver={() => {
              setInsta(instaHover);
            }}
            onMouseLeave={() => {
              setInsta(insta);
            }}
            alt=""
          />
          <motion.img
            whileTap={{ scale: 1.2 }}
            src={link}
            onMouseOver={() => {
              setLink(linkedInHover);
            }}
            onMouseLeave={() => {
              setLink(linkedIn);
            }}
            alt=""
          />
        </div>
        <img
          src={logo}
          onClick={() => {
            window.scroll(0, 0);
          }}
          alt=""
        />
      </div>
      <div className="blur-footer">
        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>
      </div>
    </footer>
  );
};

export default Footer;
