import { useState } from 'react';
import './App.css';

function App() {
  const [electricityUnitDayRateInPkWh, setElectricityUnitDayRateInPkWh] = useState('');
  const [electricityStandingChargeInPDay, setElectricityStandingChargeInPDay] = useState('');
  const [electricityTotalAnnualSpendInPounds, setElectricityTotalAnnualSpendInPounds] = useState('');
  const [finalElectricityAnswer, setFinalElectricityAnswer] = useState('');

  const [gasUnitRateInPkWh, setGasUnitRateInPkWh] = useState('');
  const [gasStandingChargeInPDay, setGasStandingChargeInPDay] = useState('');
  const [gasTotalAnnualSpendInPounds, setGasTotalAnnualSpendInPounds] = useState('');
  const [finalGasAnswer, setFinalGasAnswer] = useState('');

  const resetCalculator = () => {
    setElectricityUnitDayRateInPkWh('')
    setElectricityStandingChargeInPDay('')
    setElectricityTotalAnnualSpendInPounds('')
    setFinalElectricityAnswer('')

    setGasUnitRateInPkWh('')
    setGasStandingChargeInPDay('')
    setGasTotalAnnualSpendInPounds('')
    setFinalGasAnswer('')
  }


  const calculate = () => {
    if (
      electricityUnitDayRateInPkWh &&
      electricityStandingChargeInPDay &&
      electricityTotalAnnualSpendInPounds &&
      gasUnitRateInPkWh &&
      gasStandingChargeInPDay &&
      gasTotalAnnualSpendInPounds
    ) {
      const electricityStandingChargeConvertedToPounds = electricityStandingChargeInPDay / 100;

      const electricityAnnualStandingCharge = electricityStandingChargeConvertedToPounds * 365

      const electricityAmountSpentOnUsage = electricityTotalAnnualSpendInPounds - electricityAnnualStandingCharge;

      const electricityUnitDayRateInPounds = electricityUnitDayRateInPkWh / 100;

      const electricityUsage = electricityAmountSpentOnUsage /  electricityUnitDayRateInPounds;

      setFinalElectricityAnswer(electricityUsage);

      const gasStandingChargeConvertedToPounds = gasStandingChargeInPDay / 100;

      const gasAnnualStandingCharge = gasStandingChargeConvertedToPounds * 365

      const gasAmountSpentOnUsage = gasTotalAnnualSpendInPounds - gasAnnualStandingCharge;

      const gasUnitRateInPounds = gasUnitRateInPkWh / 100;

      const gasUsage = gasAmountSpentOnUsage /  gasUnitRateInPounds;

      setFinalGasAnswer(gasUsage);
    } else {
      setFinalElectricityAnswer('')
      setFinalGasAnswer('');
    }
  }

  return (
    <div className="App">
      <h3>
        Annual usage for electricity and gas calculator
      </h3>
      <br />
      <div>
        Electricity unit day rate (in p/kWh):
      </div>
      <input
        value={electricityUnitDayRateInPkWh}
        onChange={(e) => {
          setElectricityUnitDayRateInPkWh(e.target.value)
        }}
      />
      <br />
      <br />
      <div>
        Electricity standing charge (in p/day):
      </div>
      <input
        value={electricityStandingChargeInPDay}
        onChange={(e) => {
          setElectricityStandingChargeInPDay(e.target.value)
        }}
      />
      <br />
      <br />
      <div>
        Electricity total annual spend:
      </div>
      £<input
      value={electricityTotalAnnualSpendInPounds}
      onChange={(e) => {
        setElectricityTotalAnnualSpendInPounds(e.target.value)
      }}
    />
      <br />
      <br />
      <div>
        Gas unit rate (in p/kWh):
      </div>
      <input
        value={gasUnitRateInPkWh}
        onChange={(e) => {
          setGasUnitRateInPkWh(e.target.value)
        }}
      />
      <br />
      <br />
      <div>
        Gas standing charge (in p/day):
      </div>
      <input
        value={gasStandingChargeInPDay}
        onChange={(e) => {
          setGasStandingChargeInPDay(e.target.value)
        }}
      />
      <br />
      <br />
      <div>
        Gas total annual spend:
      </div>
      £<input
        value={gasTotalAnnualSpendInPounds}
        onChange={(e) => {
          setGasTotalAnnualSpendInPounds(e.target.value)
        }}
      />
      <br />
      <br />
      <br />
      <div>
        <button onClick={calculate}>Calculate</button>
        <button onClick={resetCalculator}>Reset</button>
      </div>
      <div>
        Annual usage for electricity and gas:
      </div>
      <div style={{ fontWeight: 400 }}>
        {(finalElectricityAnswer) ? `${Math.round(finalElectricityAnswer * 10) / 10} kWh (Electricity only)` : ''}
      </div>
      <div style={{ fontWeight: 400 }}>
        {(finalGasAnswer) ? `${Math.round(finalGasAnswer * 10) / 10} kWh (Gas only)` : ''}
      </div>
      <div style={{ fontWeight: 400 }}>
        {(finalElectricityAnswer && finalGasAnswer) ? `${Math.round((finalElectricityAnswer + finalGasAnswer) * 10) / 10} kWh (Combined)` : ''}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
