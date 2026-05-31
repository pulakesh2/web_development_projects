import PaymentCmpnt from "./PaymentCmpnt";
import "./paymentCmpnt.css";
import "./../general.css";
import React from "react";

function Payment() {
  const paymentData = [
    {
      heading: "The Fastest Way to Pay In-store & Online.",
      para: "Load up your Paytm Wallet for free and make payments in a jiffy at over 21 million stores, websites and apps.",
      smallImage: "img/wallet.png",
      samllText: "Paytm wallet",
      image: "img/wallet.webp",
    },
    {
      heading: "Pay anyone directly from your bank account.",
      para: "Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm Wallet or Directly from your Bank Account. Plus, send & receive money from anyone. ",
      smallImage: "img/paid.png",
      samllText: "UPI Money Transfer",
      image: "img/paid.webp",
    },
    {
      heading: "Want it? No more waiting for it.",
      para: "With Paytm Postpaid, your wishlist doesn't have to be on the waitlist. Shop for the things you want today and pay for them next month.  ",
      smallImage: "img/postpaidd.webp",
      samllText: "",
      image: "img/postpaid.webp",
    },
  ];
  return (
    <React.Fragment>
      <h1 className="primary-heading payment-heading">
        Paytm Payment Instruments
      </h1>
      {paymentData.map((el) => (
        <PaymentCmpnt
          key={Math.random().toString()}
          heading={el.heading}
          para={el.para}
          smallImage={el.smallImage}
          samllText={el.samllText}
          image={el.image}
        />
      ))}
    </React.Fragment>
  );
}

export default Payment;
