import React from "react";
import Layout from "../layout/Layout";

const Benefits = () => {
  return (
    <Layout>
      <div className="about">
        {/* Career Top */}
        <div className="about-top">
          <div className="container">
            <h1>Benefits of Using kudiXpress</h1>
          </div>
          <img src="../img/unknown.svg" className="img-fluid" alt="" />
        </div>

        {/* Career Second */}
        <div className="container about-container">
          <div className="about--section-1">
            <h2>
              Why choose kudiXpress for your remittance needs to Ghana? Here are
              just a few of the benefits:
            </h2>
            <p>
              <strong>Fast and convenient:</strong> Say goodbye to long lines
              and complicated forms. With kudixpress, you can send money to
              Africa in just a few clicks, right from your phone. Our app is
              available 24/7, so you can send money anytime, anywhere.
            </p>
            <p>
              <strong>Affordable:</strong> We believe in fair and transparent
              pricing. We offer competitive exchange rates and low fees, so you
              can send more money to your loved ones in Africa. Plus, we'll
              always show you the fees upfront, so you know exactly what you're
              paying before you confirm your transfer.
            </p>
            <p>
              <strong>Secure:</strong> We take the security of your personal and
              financial information seriously. Our app uses state-of-the-art
              encryption and security measures to ensure that your information
              is always safe and secure.
            </p>
            <p>
              <strong>Trusted:</strong> kudixpress is trusted by over 100k users
              and is authorized to transmit money in the US. Plus, we're
              operated by Machnet Inc., a leading financial technology company.
              When you compare kudixpress to traditional remittance methods, the
              benefits become even clearer. With kudixpress, you can skip the
              long lines, complicated forms, and high fees associated with
              traditional methods. Plus, our app is fast, convenient, and
              available 24/7.
            </p>
            <p className="alert-success p-4">
              So why wait? Sign up for kudixpress today and start sending money
              to your loved ones in Africa. Our simple and easy-to-use app makes
              sending money a breeze, and our low fees and competitive exchange
              rates mean you'll have more money to send. Click the "Get Started"
              or "Sign Up" button now to create your account and start sending
              money today!
            </p>
          </div>
          <div className="about--section-2 d-flex align-self-center">
            <img src="../img/benefit.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Benefits;
