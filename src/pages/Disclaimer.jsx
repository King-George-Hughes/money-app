import React from "react";
import Layout from "../layout/Layout";

const Disclaimer = () => {
  return (
    <Layout>
      <div className="about">
        {/* Career Top */}
        <div className="about-top">
          <div className="container">
            <h1>Disclaimer About Fees</h1>
          </div>
          <img src="../img/unknown.svg" className="img-fluid" alt="" />
        </div>
        {/*  */}
        <div className="howItWorks">
          <div className="container">
            <div className="" style={{ maxWidth: 800, margin: "0 auto" }}>
              <p className="fs-2 mb-5">
                <span
                  className="bg-success"
                  style={{
                    width: 5,
                    height: 15,
                    display: "inline-block",
                    borderRadius: 5,
                    marginRight: 10,
                  }}
                ></span>
                At kudixpress, we believe in transparency when it comes to our
                fees. We strive to keep our fees as low as possible so that you
                can send more money to your loved ones in Africa.
              </p>
              <p className="fs-2 mb-5">
                <span
                  className="bg-success"
                  style={{
                    width: 5,
                    height: 15,
                    display: "inline-block",
                    borderRadius: 5,
                    marginRight: 10,
                  }}
                ></span>
                It's important to note that fees vary depending on the amount
                you're sending, the payment method you choose, and other
                factors. We always show you the fees upfront, so you know
                exactly what you're paying before you confirm your transfer.
              </p>
              <p className="fs-2 mb-5">
                <span
                  className="bg-success"
                  style={{
                    width: 5,
                    height: 15,
                    display: "inline-block",
                    borderRadius: 5,
                    marginRight: 10,
                  }}
                ></span>
                Additionally, there may be fees charged by your bank or the
                recipient's bank. We recommend that you check with your bank or
                the recipient's bank to understand any additional fees that may
                be charged.
              </p>
              <p className="fs-2 mb-5">
                <span
                  className="bg-success"
                  style={{
                    width: 5,
                    height: 15,
                    display: "inline-block",
                    borderRadius: 5,
                    marginRight: 10,
                  }}
                ></span>
                Please note that exchange rates may also fluctuate, which can
                affect the final amount received by the recipient. We use
                real-time exchange rates, but it's important to keep in mind
                that they can change rapidly and may not always be the same as
                what is displayed at the time of your transfer.
              </p>
              <p className="fs-2 mb-5">
                <span
                  className="bg-success"
                  style={{
                    width: 5,
                    height: 15,
                    display: "inline-block",
                    borderRadius: 5,
                    marginRight: 10,
                  }}
                ></span>
                If you have any questions or concerns about our fees or exchange
                rates, please don't hesitate to contact our customer support
                team. We're available 24/7 and are always happy to assist you.
              </p>
              <p className="alert-success fs-2 p-4">
                Thank you for choosing kudixpress for your money transfer needs.
                We're committed to providing you with fast, secure, and
                affordable services to help you support your loved ones in
                Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Disclaimer;
