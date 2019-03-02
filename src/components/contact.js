import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <h2 className="text-center">CONTACT</h2>

      <div className="row text-center section-content">
				<p className="col sm-12 md-5 lg-3 md-push-1 lg-push-3 contact">
					Call Irina at
					<span className="contact-phone"> (850) 774-4418</span>

					<span>
						or
					</span>
          <br />
					drop her a line at
					<a href="mailto:ipopescu0127@gmail.com" className="contact-link">
          <p><i class="fa fa-envelope"></i></p>
					</a>
				</p>
        <div className="row text-center section-content">
        <div className="col fluid md-3 lg-2 md-push-1 lg-push-2 button-group">
          <a href="https://www.instagram.com/brow_artistry_by_irina/" className="button -block">
            Instagram
          </a>
          <a href="https://www.facebook.com/Brow-Artistry-by-Irina-458205198043813/" className="button -block">
            Facebook
          </a>
        </div>
			</div>

      <div className="row text-center section-content">

        <p className="col sm-12 md-5 lg-3 md-push-1 lg-push-3 contact">
        <br />
        <br />
          Visit at:
            <br />
            9900 S Thomas Drive
            Shores of Panama Resort
            Panama City Beach, Florida
        </p>
      </div>
		</div>

    </section>
  );
};

export default Contact;
