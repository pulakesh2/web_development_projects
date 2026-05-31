import FinancialServiceCmpnt from "./FinancialServiceCmpnt";
import React from "react";
function FinancialService() {
  const financeData = [
    {
      financeLogo: "img/financial.png",
      heading: "India's most sincere bank.",
      para: "Paytm Payments Bank offers secure, transparent and risk-free banking at your fingertips. With instant account opening, virtual debit card and zero balance requirements, experience the future of banking today.",
      image: "img/financial.webp",
    },
    {
      financeLogo: "img/paytm-info-1.webp",
      heading: "Build Long-term Wealth & Achieve your Goals.",
      para: "Investing on Paytm Money is transparent, low-cost and commission-free. Buy stocks & mutual funds that can help you create wealth & realise your dreams.",
      image: "img/paytm-info1.webp",
    },
    {
      financeLogo: "img/paytm-info2.webp",
      heading: "Get a Personal Loan in 2 Minutes.",
      para: "Paytm offers India's quickest multi-purpose, hassle-free loan. It is 100% digital, transparent and paperless. ",
      image: "img/paytm-info-2.webp",
    },
    {
      financeLogo: "img/paytm-info3.webp",
      heading: "Insurance made easy.",
      para: "Buying insurance does not have to be tedious, time-consuming & confusing. Paytm Insurance removes the worry of getting insured by making it simple, convenient & easy-to-understand. ",
      image: "img/paytm-info-3.webp",
    },
  ];
  return (
    <React.Fragment>
      <h1 className="primary-heading">Financial Services by Paytm</h1>
      {financeData.map((el) => (
        <FinancialServiceCmpnt
          key={Math.random().toString()}
          financeLogo={el.financeLogo}
          heading={el.heading}
          para={el.para}
          image={el.image}
        />
      ))}
    </React.Fragment>
  );
}

export default FinancialService;
