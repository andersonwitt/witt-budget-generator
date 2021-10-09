import { Card, CardActionArea, CardHeader, Grid } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";

const Home: React.FC = () => {
  const history = useHistory();

  const handleClickBudget = () => {
    history.push("/budget");
  };

  return (
    <Grid p={2} spacing={2} container>
      <Grid item xs={4}>
        <Card>
          <CardActionArea onClick={handleClickBudget}>
            <CardHeader title="Novo Orçamento" />
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
