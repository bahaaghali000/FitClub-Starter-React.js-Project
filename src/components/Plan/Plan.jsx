import React from "react";
import "./Plan.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
const Plan = () => {
  return (
    <div className="plans" id="plans">
      <div className="plans-header progrmas-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      <div className="plans-container">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        {plansData.map((plan, i) => (
          <div className="plan" key={`plan${i}`}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>{`${plan.price}$`}</span>
            <div className="features">
              <div>
                <img src={whiteTick} alt="" />
                <span>{plan.features[0]}</span>
              </div>
              <div>
                <img src={whiteTick} alt="" />
                <span>{plan.features[1]}</span>
              </div>
              <div>
                <img src={whiteTick} alt="" />
                <span>{plan.features[2]}</span>
              </div>
            </div>
            <span>See more benefits -{`>`}</span>
            <div className="btn">Join now</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
