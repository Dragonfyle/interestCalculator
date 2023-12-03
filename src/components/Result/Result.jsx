import { calculateInvestmentResults } from "../../util/investment";
import { formatter } from "../../util/investment";

export default function Result({ inputParams }) {
  const annualData = calculateInvestmentResults(inputParams);

  const formattedTable = annualData.map(
    ({ year, interest, valueEndOfYear, annualInvestment }) => {
      console.log(year, interest, valueEndOfYear, annualInvestment);
      const totalIterest =
        valueEndOfYear - inputParams.initial - annualInvestment * year;
      const totalInvested = inputParams.initial + annualInvestment * year;

      return (
        <tr key={year}>
          <td>{year}</td>
          <td>{formatter.format(valueEndOfYear)}</td>
          <td>{formatter.format(interest)}</td>
          <td>{formatter.format(totalIterest)}</td>
          <td>{formatter.format(totalInvested)}</td>
        </tr>
      );
    }
  );

  console.log(formattedTable);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{formattedTable}</tbody>
    </table>
  );
}
