import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import code from "@code-wallet/elements";

export const Send = () => {
  const el = useRef<HTMLDivElement>(null);
  const { address, number } = useParams<{ address: string; number: string }>();
  let parsedNumber = 0;

  if (number) parsedNumber = parseInt(number, 10);

  useEffect(() => {
    const { button } = code.elements.create("button", {
      currency: "usd",
      destination: address,
      amount: parsedNumber,
    });

    if (button) {
      button.mount(el.current!);
    }
  }, []);

  if (isNaN(parsedNumber) || parsedNumber <= 0) {
    return <div>Invalid Number</div>;
  }

  return (
    <div className="App">
      <div ref={el} />
    </div>
  );
};
