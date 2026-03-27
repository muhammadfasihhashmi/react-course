import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function increment() {
    if (step < 3) setStep(step + 1);
  }

  function decrement() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "×" : "+"}
      </button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div className="message">
            <h3>step {step}</h3>
            <p>{messages[step - 1]}</p>
          </div>
          <div className="buttons">
            <button onClick={decrement}>Previous</button>
            <button onClick={increment}>Next</button>
          </div>
        </div>
      ) : (
        <p>Step</p>
      )}
    </>
  );
}

export default App;
