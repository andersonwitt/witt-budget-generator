import React, { useState } from "react";
import { BudgetContext, BudgetType } from "./contexts/Budget";
import Routes from "./Routes";


function App(): JSX.Element {
  const [budget, setBudget] = useState<BudgetType>({
    companyName: "",
    customerName: "",
    items: [
      {
        description: "",
        quantity: 0,
        total: 0,
      },
    ],
    obs: "",
  });

  return (
    <div className="App">
      <BudgetContext.Provider value={{ budget, setBudget }}>
        <Routes />
      </BudgetContext.Provider>
    </div>
  );
}

export default App;
