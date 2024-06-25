import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to our E-commerce Agriculture Website Name your one-stop
            online marketplace for all your agricultural needs. We are dedicated
            to supporting farmers, gardeners, and agricultural businesses by
            providing a wide range of high-quality products, from seeds and
            fertilizers to tools and machinery, all at competitive prices.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
