import calculatorLogoImg from "../../../public/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={calculatorLogoImg} alt="logo showing a moneybag" />
      <h1 id="header">React Investment Calculator</h1>
    </header>
  );
}
