export function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label htmlFor="selfTip">{children}</label>
      <select
        name="selfTip"
        id="selfTip"
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">It was not good (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
