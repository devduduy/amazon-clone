import React from "react";
import CurrencyFormat from "react-currency-format";

import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import { getCartTotal } from "../reducer";

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Amount of product : <small>({cart.length} items)</small>
            </p>
            <p className="subtotal__cost">
              Subtotal : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={() => alert("comming soon..")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
