import React from "react";
import "./services.css";
import Img from "gatsby-image";

// Need to add more services and images that goes with it.
const Services = ({ microImg, ombreImg, eyelinerImg }) => {
  return (
    <section id="services" className="section">
      <h2 className="text-center">SERVICES</h2>
      <div className="section-content">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <h4>Eyebrow Microblading:</h4>
            <p>
              Microblading is a new and updated semi-permanent make-up technique where through the manual process of inserting pigment into the upper layers of skin, we create the desired fullness and shape of the eyebrows. The effects can last up to 12-24 months, depending on skin types, after which the pigment fades leaving the skin and your natural brows precisely as they were. The results are very natural and lifelike, giving the eyebrows a natural, fuller look.
            </p>
            <br />
            <p>Prices: $400</p>
            <p>To book call at:<span> (850) 774-4418</span></p>
            <br />
            <br />
            <br />
            <br />
          </div>

          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <Img
              title="Microblading service image"
              alt="Microblading image"
              sizes={microImg.sizes}
              className="img-responsive center-block"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <h4>Ombré shading</h4>
            <p>
            Ombré shading - a machine method of shading the eyebrows, commonly referred to as the "Ombre" look is ideal for those who want a natural yet more dramatic then microblading, look to their eyebrows. The technique itself is done with specific pigment to match the client`s skin tone and hair color and tiny needle groupings to ensure the least amount of trauma possible is caused to the skin. Shading can be an ideal situation for those who have had poor quality microblading treatments as well since the fullness of the brow can mask poor microblading strokes (case by case basis).
            </p>
            <br />
            <p>Prices: $500</p>
            <p>To book call at:<span> (850) 774-4418</span></p>
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <Img
              title="Ombré service image"
              alt="Ombré shading image"
              sizes={ombreImg.sizes}
              className="img-responsive center-block"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <h4>Permanent Eyeliner</h4>
            <p>
            Two different styles : Classic or Soft Eyeshadow!
            <br />
            Starting March 10th
            <br />
            ⌛️procedure duration: 2.5 hours
            <br />
            ⏰touch up: 1 required 6weeks later
            </p>
            <br />
            <p>Prices: $425</p>
            <p>To book call at: <span> (850) 774-4418</span></p>
          </div>

          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <Img
              title="Eyeliner service image"
              alt="Eyeliner image"
              sizes={eyelinerImg.sizes}
              className="img-responsive center-block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
