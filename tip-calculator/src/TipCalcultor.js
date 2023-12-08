import { useState } from "react";
import { BillInput } from "./BillInput";
import { SelectPercentage } from "./SelectPercentage";
import { Output } from "./Output";
import { Reset } from "./Reset";

export function TipCalcultor() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  let tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <h1>Tip Calculator</h1>
      <BillInput bill={bill} onSetBill={setBill}></BillInput>
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip}></Output>
          <Reset onReset={handleReset}></Reset>
        </>
      )}
    </div>
  );
}
