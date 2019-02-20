import React from "react";
import "./services.css";
import Img from "gatsby-image";

// Need to add more services and images that goes with it.
const Services = () => {
  return (
    <section id="services" className="section">
      <h2 className="text-center">Services</h2>
      <div className="section-content">
        // First Service
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <h4>Eyebrow Microblading:</h4>
            <p>
            Microblading is semi permanent , superficial solution to sparse, over plucked, over waxed and thinning eyebrows. It is ideal to cover scars and gaps, define shape, create an arch fin in the brows. Microblading allows to construct natural looking eyebrows for people with very little or no brow hairs. It procedure is perfect for both men and women. Eyebrow Microblading is a manual method of depositing a small amount of ink outer layer of the skin without reaching the dermis. The needle used in manual microblading is 3 times thinner than the one used in machine, which allows to create very fine crisp hair strokes that do not blur after healing.
            </p>
            <p>Prices: $450</p>
          </div>
        </div>
        // Second service
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <h4>Permanent Makeup:</h4>
            <p>
            Eyeliner (Top & Bottom)$550
            <br />
            Full Lip $550
            <br />
            Lipliner $350
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
