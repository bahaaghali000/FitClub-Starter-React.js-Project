import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
import "./Join.css";

const Join = () => {
  const form = useRef();
  const input = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_8xla3wn",
  //       "template_r1qu4cc",
  //       form.current,
  //       "Mple8oHEvXeVPG-cW"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <div className="join-us">
      <div className="left-join">
        <hr />
        <div className="left-content">
          <div>
            <span className="stroke-text">READY TO </span>
            <span>LEVEL UP </span>
          </div>
          <div>
            <span>YOUR BODY </span>
            <span className="stroke-text">WITH US?</span>
          </div>
        </div>
      </div>
      <div className="right-join">
        <form ref={form}>
          {" "}
          {/*  onSubmit={sendEmail} */}
          <input
            type="emial"
            placeholder="Enter Your Email"
            required
            name="user_email"
            ref={input}
          />
          <button type="submit" className="btn btn-join">
            Join now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
