import React from "react";
import "./services.css";
import Img from "gatsby-image";
import PhoneNumber from 'react-phone-number';


// Need to add more services and images that goes with it.
const Services = ({ microImg, ombreImg, eyelinerImg }) => {
  return (
    <section id="services" className="section">
      <h2 className="text-center">SERVICES</h2>
      <div className="section-content">
        <div className="row services">
          <div className="col-12 col-sm-12 col-md-6">
            <h4>Microblading</h4>
            <br />
            <span className="space">
              ⌛️procedure duration: 2 hours 30 minutes
            </span>
            <p>
              Microblading is a new and updated semi-permanent make-up technique where through the manual process of inserting pigment into the upper layers of skin, we create the desired fullness and shape of the eyebrows. The effects can last up to 12-24 months, depending on skin types, after which the pigment fades leaving the skin and your natural brows precisely as they were. The results are very natural and lifelike, giving the eyebrows a natural, fuller look.
            </p>
          </div>
          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <Img
              title="Microblading service image"
              alt="Microblading image"
              sizes={microImg.sizes}
              className="img-responsive center-block"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <p>Prices: $425</p>
            <button className="butt"><a href="tel:8507744418">To book call at: (850) 774-4418</a></button>
          </div>
        </div>
        <hr />

        <div className="row services">
          <div className="col-12 col-sm-12 col-md-6">
            <h4>Blade & Shade Brows</h4>
            <br />
            <span className="space">
              ⌛️procedure duration: 2 hours 30 minutes
            </span>
            <p>
            This technique consists of shading the brow following the microblading procedure to add more density or a more defined look.
            <br />It benefits clients with natural coarse brow hair.
            </p>
          </div>
          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <Img
              title="Microblading service image"
              alt="Microblading image"
              sizes={microImg.sizes}
              className="img-responsive center-block"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <p>Prices: $460</p>
            <button className="butt"><a href="tel:8507744418">To book call at: (850) 774-4418</a></button>
          </div>
        </div>
        <hr />

        <div className="row services">
          <div className="col-12 col-sm-12 col-md-6">
            <h4>Ombré shading</h4>
            <br/>
            <span className="space">
              ⌛️procedure duration: 30 minutes
            </span>
            <br/>
            <p>
            Ombré shading - a machine method of shading the eyebrows, commonly referred to as the "Ombre" look is ideal for those who want a natural yet more dramatic then microblading, look to their eyebrows. The technique itself is done with specific pigment to match the client’s skin tone and hair color and tiny needle groupings to ensure the least amount of trauma possible is caused to the skin. Shading can be an ideal situation for those who have had poor quality microblading treatments as well since the fullness of the brow can mask poor microblading strokes (case by case basis).
            </p>
          </div>
          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <Img
              title="Ombré service image"
              alt="Ombré shading image"
              sizes={ombreImg.sizes}
              className="img-responsive center-block"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <p>Prices: $500</p>
            <button className="butt"><a href="tel:8507744418">To book call at: (850) 774-4418</a></button>
          </div>
        </div>
        <hr/>

        <div className="row services">
          <div className="col-12 col-sm-12 col-md-6">
            <h4>Combination Brows</h4>
            <br/>
            <span className="space">
              ⌛️procedure duration: 3 hours
            </span>
            <br/>
            <p>
            With combo brows,the inner front of the brows is feathered with microbladed strokes, while the tail is shaded for a perfect definition.
            <br />More suitable for clients that would like to have a make up look.
            </p>
          </div>
          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <Img
              title="Ombré service image"
              alt="Ombré shading image"
              sizes={ombreImg.sizes}
              className="img-responsive center-block"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <p>Prices: $500</p>
            <button className="butt"><a href="tel:8507744418">To book call at: (850) 774-4418</a></button>
          </div>
        </div>
        <hr/>

        <div className="row services">
          <div className="col-12 col-sm-12 col-md-6">
            <h4>Permanent Eyeliner</h4>
            <br/>
            <span className="space">
              ⌛️procedure duration: 1 hour 45 minutes
            </span>
            <br/>
            <p>
              Two different styles : Classic or Soft Eyeshadow!
              <br />
              Starting March 10th:
              <br />
              <span className="space">
                ⏰touch up: 1 required 6weeks later
              </span>
            </p>

          </div>
          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <Img
              title="Eyeliner service image"
              alt="Eyeliner image"
              sizes={eyelinerImg.sizes}
              className="img-responsive center-block"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <p>Prices: $425</p>
            <button className="butt"><a href="tel:8507744418">To book call at: (850) 774-4418</a></button>
          </div>
        </div>
        <hr/>
        <div className="row services">
          <div className="col-12 col-sm-12 col-md-6">
            <h4>Touch up (Brows or Eyeliner)</h4>
            <br/>
            <span className="space">
              ⌛️procedure duration: 1 hour 45 minutes
            </span>
            <br/>
            <p>
              This session is done 6 weeks post treatment.
              Usually we asses the retention of the area and perfect your brows or eyeliner, whether it’s color, shape or even thickness!
              <br />
              This will give you lasting results.
            </p>
          </div>
          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <Img
              title="Microblading service image"
              alt="Microblading image"
              sizes={microImg.sizes}
              className="img-responsive center-block"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <p>Prices: $125</p>
            <button className="butt"><a href="tel:8507744418">To book call at: (850) 774-4418</a></button>
          </div>
        </div>
        <hr />
        <div className="row services">
          <div className="col-12 col-sm-12 col-md-6">
            <h4>Cosmetic tattoo removal</h4>
            <br/>
            <span className="space">
              ⌛️procedure duration: 30 minutes
            </span>
            <br/>
            <p>
            A specialized, all natural solution is implanted over your existing cosmetic tattoo.
            When it penetrates the skin, it breaks up the pigment and lifts the pigment to surface when scabbing. 
            </p>
          </div>
          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <Img
              title="Microblading service image"
              alt="Microblading image"
              sizes={microImg.sizes}
              className="img-responsive center-block"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <p>Prices: $100 (per session)</p>
            <button className="butt"><a href="tel:8507744418">To book call at: (850) 774-4418</a></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
