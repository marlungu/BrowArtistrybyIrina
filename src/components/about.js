import React from "react";
import "./about.css";
import Img from "gatsby-image";

const AboutMe = ({ profileImg }) => {
  return (
    <section id="about" className="section">
      <h2 className="text-center">ABOUT ME</h2>
      <div className="section-content">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <Img
              title="Profile image"
              alt="Large image of Ira"
              sizes={profileImg.sizes}
              className="img-responsive center-block"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <h4>Hi There!</h4>
            <p>
              I want to introduce myself to you all! My name is Irina Popescu, the very proud owner of Brow Artistry by Irina, as well as the artist behind all the work on this page. I am Romanian by nationality and yes I have an accent!  I’ve been in Panama City Beach 11 years, and I can say this is my home now!
            </p>
            <p>
              My passion for permanent cosmetics started when I first picked up my brow pencil and started drawing hair like strokes. I thought “It would be nice not to have to do that all the time!”. And since not everyone has the patience and artistry to do that every day, I decided to follow my dream and get acquainted with the permanent make-up industry!
            </p>
            <p>
              So I did my research on training and what it took to start a business, market outlook, start-up cost, etc. I decided to start with microblading since this is one of the most popular techniques used nowadays. I chose the best microblading training course at PhiBrows Academy in the state of California, which is the most prestigious beauty academy in the world. There I learned how to use the PhiBrows method for precise calculation of the ideal shape of your eyebrows, according to the golden intersection phi (1.618) and face morphology.
            </p>
          </div>
          <div className="col-12 col-md-10 col-md-12">
            <p>
              After getting my certification, I decided that I had to continue my journey and signed up for a higher level class with Advance Microblading Academy in Illinois. There, I proudly completed my advanced training in ombré shading, cosmetic tattoo removal, and color correction.
            </p>
            <p>Later on, I realized that in the beauty industry, you can’t stop learning. And I always like to stay on top of today’s trends! So I signed up for my next class, advanced permanent eyeliner class at the Center of Applied Aesthetics in Illinois! I completed it and now getting ready for my next adventure, nipple and areola reconstruction/micro pigmentation! Which is so dear to my heart, because I would be able to make a difference in the lives of those women who had breast surgery! Areola tattooing provides the finishing touch after the mastectomy. Patients feel like this form of tattoo helps them during the last part of their recovery to look complete and healthy again! Designing brows or giving you that perfect wing is not only art to me or just a career, but it’s also my passion! My goal is providing happiness and making every person that comes into my studio feel unique and beautiful. I love being creative with my craft, and I think in my way that I am changing the lives of my clients by bringing them joy and confidence with every visit. Thank you all, and I hope to see you soon at Brow Artistry by Irina studio!(<a href="https://wego.here.com/directions/mix//Brow-Artistry-by-Irina,-9900-S-Thomas-Drive-Shores-of-Panama-Resort,-32408-Panama-City-Beach:e-eyJuYW1lIjoiQnJvdyBBcnRpc3RyeSBieSBJcmluYSIsImFkZHJlc3MiOiI5OTAwIFMgVGhvbWFzIERyaXZlIFxuU2hvcmVzIG9mIFBhbmFtYSBSZXNvcnQsIFBhbmFtYSBDaXR5IEJlYWNoLCBGbG9yaWRhIiwibGF0aXR1ZGUiOjMwLjE3NjM4LCJsb25naXR1ZGUiOi04NS42ODQwMiwicHJvdmlkZXJOYW1lIjoiZmFjZWJvb2siLCJwcm92aWRlcklkIjo0NTgyMDUxOTgwNDM4MTN9?map=30.17638,-85.68402,15,normal&fb_locale=en_US" target="_blank" rel="noopener noreferrer" className="directions">
              Get Directions
            </a>) ~ in <a
                href="https://en.wikipedia.org/wiki/Panama_City_Beach,_Florida"
                target="_blank"
                rel="noopener noreferrer"
              >
                Panama City Beach, Florida.
              </a></p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
