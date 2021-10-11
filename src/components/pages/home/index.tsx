import { Grid } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import Card from "../../molecules/card";

const Home: React.FC = () => {
  const history = useHistory();

  const handleClickBudget = () => {
    history.push("/budget");
  };

  return (
    <Grid spacing={2} container>
      <Grid item xs={4}>
        <Card title="Novo orçamento" cardAction={handleClickBudget} />
      </Grid>
    </Grid>
  );
};

export default Home;
