import { useEffect, useMemo, useState } from "react";
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
    // {
    //   id: 6,
    //   value: "Custom",
    // },
  ];

  useEffect(() => {
    if (People == 0) {
      return;
    } else {
      setTip((Bill * Percent) / 100 / People);
    }
  }, [People, Percent, Bill]);

  useMemo(() => setTotal(Bill / People + Tip), [Tip]);

  const handlePercent = (e) => {
    setPercent(e.target.value);
    console.log({ e });
    // setSelected(true);
  };
  const handleCustomPercent = (e) => {
    setPercent(e.target.value);
  };

  const handleCalculation = (e) => {
    setPeople(e.target.value);
    // console.log(e.target.value);
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
                <label htmlFor="Bill"></label>
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
                    // className="selected"
                    value={element.value}
                    onClick={handlePercent}
                  >
                    {element.value}%
                  </button>
                ))}
                <input
                  className="Custom"
                  type="text"
                  placeholder="Custom"
                  onChange={handleCustomPercent}
                />
              </div>
            </div>
            {/* no fo people  */}
            <div className="People">
              <span>Number of People</span>
              <div className="people-input">
                <img src={person} alt="" />
                <label htmlFor="noOfPeople"></label>
                <input
                  className="people-no"
                  type="text"
                  name="people"
                  value={People}
                  onChange={handleCalculation}
                  placeholder="0"
                  autoComplete="off"
                />
              </div>
              {People == 0 ? (
                <div className="error">Value can't be zero</div>
              ) : (
                ""
              )}
            </div>
          </div>
          {/* right side  */}
          <div className="right">
            <div className="stats">
              <div className="Tip">
                <div className="heading-output">
                  Tip Amount <span>/ person</span>
                </div>
                <h1 className="Tip-person">{Tip ? Tip.toFixed(2) : 0}</h1>
              </div>
              <div className="Total">
                <div className="heading-output">
                  Total <span>/ person</span>
                </div>
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
