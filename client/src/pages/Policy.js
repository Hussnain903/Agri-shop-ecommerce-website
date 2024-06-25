import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            At Agri Shop E-commerce website, we prioritize your privacy. We
            collect only essential personal information, including your name,
            email address, and phone number, to process orders, manage your
            account, and provide customer support. We do not sell or share your
            information with third parties, except as required by law. Your data
            is protected with appropriate security measures, and you have the
            right to access, correct, and delete your information at any time.
            For any questions, please contact us at [agrishop@gmail.com].
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
