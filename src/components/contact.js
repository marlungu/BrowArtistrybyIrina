import React from "react";
import "./contact.css";

const Contacts = () => {
  return (
    <section id="contact" className="section contact">
      <h2 className="text-center">CONTACT</h2>

      <div className="row text-center section-content">
				<p className="col sm-12 md-5 lg-3 md-push-1 lg-push-3 contact">
					Call Irina at
					<span className="contact-phone"> (850) 774-4418</span>
					<span className="contact-or">
						<span>or</span>
					</span>
					drop her a line at
					<a href="mailto:example.com" className="contact-link">
						example.com
					</a>
				</p>
        <div className="col fluid md-3 lg-2 md-push-1 lg-push-2 button-group">
          <a href="https://www.instagram.com/irina_gsmom/" className="button -block">
            Instagram
          </a>
          <a href="https://twitter.com/irina_gsmom" className="button -block">
            Twitter
          </a>
          <a href="https://www.facebook.com/Brow-Artistry-by-Irina-458205198043813/" className="button -block">
            Facebook
          </a>
			</div>
		</div>

    </section>
  );
};

export default Contacts;
