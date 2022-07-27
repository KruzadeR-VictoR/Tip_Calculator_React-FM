import { useEffect, useState } from "react";
import dollar from "./assets/icon-dollar.svg";
import person from "./assets/icon-person.svg";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const [Bill, setBill] = useState();
  const [Percent, setPercent] = useState();
  const [People, setPeople] = useState();
  const [Tip, setTip] = useState(0);
  const [Total, setTotal] = useState(0);
  // console.log(Bill);
  // console.log(People);
  // console.log(Percent);

  const PercentValues = [
    {
      id: 1,
      value: 5,
    },
    {
      id: 2,
      value: 10,
    },
    {
      id: 3,
      value: 15,
    },
    {
      id: 4,
      value: 25,
    },
    {
      id: 5,
      value: 50,
    },
    {
      id: 6,
      value: "Custom",
    },
  ];

  useEffect(() => {
    setTotal(Bill / People + Tip);
  }, [People]);

  const handleCalculation = (e) => {
    setPeople(e.target.value);
    setTip((Bill * Percent) / 100 / e.target.value);
  };

  const handleReset = () => {
    setBill("");
    setPercent("");
    setPeople("");
    setTip(0);
    setTotal(0);
    
  };
  return (
    <>
      <main>
        <div className="header">
          <img src={logo} alt="" />
        </div>
        <div className="calculator">
          <div className="left">
            {/* Bill amount  */}
            <div className="bill-no">
              <span className="bill-text">Bill</span>
              <div className="Bill-input">
                <img src={dollar} alt="" />
                <input
                  className="bill-amt"
                  type="text"
                  name="Bill"
                  id="Bill"
                  value={Bill}
                  onChange={(e) => setBill(e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>
            {/* select Tip  */}
            <div className="select-Tip">
              <span>Select Tip %</span>
              <div className="tip-amount">
                {PercentValues.map((element) => (
                  <button
                    key={element.id}
                    className="tip-amt"
                    value={Percent}
                    onClick={() => setPercent(element.value)}
                  >
                    {element.value}%
                  </button>
                ))}
              </div>
            </div>
            {/* no fo people  */}
            <div className="People">
              <span>Number of People</span>
              <div className="people-input">
                <img src={person} alt="" />
                <input
                  className="people-no"
                  type="text"
                  name="people"
                  value={People}
                  onChange={handleCalculation}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          {/* right side  */}
          <div className="right">
            <div className="stats">
              <div className="Tip">
                <h5>
                  Tip Amount <span>/ person</span>
                </h5>
                <h1 className="Tip-person">{Tip ? Tip.toFixed(2) : 0}</h1>
              </div>
              <div className="Total">
                <h5>
                  Total <span>/ person</span>
                </h5>
                <h1 className="Tip-total">{Total ? Total.toFixed(2) : 0}</h1>
              </div>
            </div>
            <button className="Reset" onClick={handleReset}>
              RESET
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
