import React from "react";
import { useHistory } from "react-router";

const NewBudget: React.FC = () => {
  const history = useHistory();

  const handleClickHome = () => {
    history.push("/viewer");
  };

  return (
    <h1 style={{ cursor: "pointer" }} onClick={handleClickHome}>
      Budget
    </h1>
  );
};

export default NewBudget;
