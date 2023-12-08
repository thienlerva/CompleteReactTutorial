export function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label htmlFor="bill">How much was the bill?</label>
      <input
        type="text"
        id="bill"
        name="bill"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}
