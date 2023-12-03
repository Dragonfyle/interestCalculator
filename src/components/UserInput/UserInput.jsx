export default function UserInput({ label, changeHandler }) {
  return (
    <div id="input-wrapper">
      <label>{label}</label>
      <input
        type="number"
        required
        onChange={(event) => changeHandler(event.target.value, label)}
      />
    </div>
  );
}
