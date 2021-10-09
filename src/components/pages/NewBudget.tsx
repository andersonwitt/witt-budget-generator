import { Box } from "@mui/material";
import React from "react";
import NewBudgetForm from "../templates/NewBudgetForm";

const NewBudget: React.FC = () => {
  return (
    <Box
      sx={{
        flex: 1,
        padding: 3,
      }}
    >
      <NewBudgetForm />
    </Box>
  );
};

export default NewBudget;
