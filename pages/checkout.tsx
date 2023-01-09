import { NextPage } from "next";

import CheckoutForm from "../components/CheckoutForm";

const PurchasePage: NextPage = () => {
  return (
    <>
      <div className="page-container">
        <p>Purchase your memory album 💖</p>
        <CheckoutForm />
      </div>
    </>
  );
};

export default PurchasePage;
