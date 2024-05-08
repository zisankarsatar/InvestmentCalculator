import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInvestment(inputIdendtifier, inputValue) {
    setInvestment((prevInvestment) => {
      return {
        ...prevInvestment,
        [inputIdendtifier]: +inputValue,
      };
    });
  }

  const userInputValid = investment.duration >= 1 ? true : false;
  return (
    <>
      <Header />
      <UserInput investment={investment} handleInvestment={handleInvestment}/>
      {userInputValid ? <Results results={investment}/> : <p className="center">Duration value is not valid.</p>}
    </>
  );
}

export default App;
