import React from "react";
import Cover from "../components/cover";
import Navigation from "../components/navigation";
import AboutMe from "../components/about";
import Services from "../components/services";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import favicon from "../static/logo/favicon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

const HomePage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const metaDescr = data.site.siteMetadata.description;
  return (
    <div>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={metaDescr} />
        <link rel="icon" type="/image/png" href={favicon} />
      </Helmet>
      <Cover coverImg={data.coverImg} />
      <div className="container-fluid main">
        <Navigation />
        <AboutMe profileImg={data.profileImg}/>
        <Services microImg={data.microImg} ombreImg={data.ombreImg} eyelinerImg={data.eyelinerImg} browEyelinerImg={data.browEyelinerImg} combImg={data.combImg} bladeImg={data.bladeImg}/>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;

export const query = graphql`
  query allImgsQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    coverImg: imageSharp(id: { regex: "/Cover/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }

    profileImg: imageSharp(id: { regex: "/Avatar/" }) {
      sizes(maxWidth: 420, maxHeight: 630) {
        ...GatsbyImageSharpSizes
      }
    }

    microImg: imageSharp(id: { regex: "/Micro/" }) {
      sizes(maxWidth: 620, maxHeight: 530) {
        ...GatsbyImageSharpSizes
      }
    }

    bladeImg: imageSharp(id: { regex: "/Blade/" }) {
      sizes(maxWidth: 620, maxHeight: 530) {
        ...GatsbyImageSharpSizes
      }
    }

    ombreImg: imageSharp(id: { regex: "/Ombre/" }) {
      sizes(maxWidth: 620, maxHeight: 530) {
        ...GatsbyImageSharpSizes
      }
    }

    combImg: imageSharp(id: { regex: "/Comb/" }) {
      sizes(maxWidth: 620, maxHeight: 530) {
        ...GatsbyImageSharpSizes
      }
    }

    eyelinerImg: imageSharp(id: { regex: "/Eyeliner/" }) {
      sizes(maxWidth: 620, maxHeight: 530) {
        ...GatsbyImageSharpSizes
      }
    }

    browEyelinerImg: imageSharp(id: { regex: "/BrowEye/" }) {
      sizes(maxWidth: 620, maxHeight: 565) {
        ...GatsbyImageSharpSizes
      }
    }




  }
`;
