import { ListAltOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";

import Header from "../../molecules/header";
import NewBudgetForm from "../../molecules/budget-form";

const NewBudget: React.FC = () => {
  return (
    <Grid spacing={2} container>
      <Grid mb={2} item xs={12}>
        <Header
          title="Novo orçamento"
          icon={<ListAltOutlined fontSize="large" />}
          backgroundColor="#c62828"
          color="#fff"
        />
      </Grid>
      <Grid item xs={12}>
        <NewBudgetForm />
      </Grid>
    </Grid>
  );
};

export default NewBudget;
