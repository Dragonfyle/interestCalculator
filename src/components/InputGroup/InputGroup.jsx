import UserInput from "../UserInput/UserInput";

const INPUT_LABELS = {
  INITIAL_INVESTMENT: "Initial Investment",
  ANNUAL_INVESTMENT: "Annual Investment",
  EXPECTED_RETURN: "Expected Return",
  DURATION: "Duration",
};

export default function InputGroup({ changeHandler }) {
  return (
    <div id="user-input" className="input-group">
      <UserInput
        label={INPUT_LABELS.INITIAL_INVESTMENT}
        changeHandler={changeHandler}
      />
      <UserInput
        label={INPUT_LABELS.ANNUAL_INVESTMENT}
        changeHandler={changeHandler}
      />
      <UserInput
        label={INPUT_LABELS.EXPECTED_RETURN}
        changeHandler={changeHandler}
      />
      <UserInput label={INPUT_LABELS.DURATION} changeHandler={changeHandler} />
    </div>
  );
}
