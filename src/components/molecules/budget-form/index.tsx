import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { useHistory } from "react-router";
import { BudgetContext, BudgetItemType } from "../../../contexts/Budget";

const NewBudgetForm: React.FC = () => {
  const theme = useTheme();
  const history = useHistory();
  const { budget, setBudget } = useContext(BudgetContext);

  const handleClickGeneratePDF = () => {
    history.push("/viewer");
  };

  const handleItemChanged = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!setBudget) {
      return;
    }

    const itemsUpdated = budget.items.map((item, itemIndex) => {
      const typeNumberFields = ["total", "quantity"];
      const value = event.target.value;
      const name = event.target.name;

      if (index === itemIndex) {
        return {
          ...item,
          [name]: typeNumberFields.includes(name) ? Number(value) : value,
        } as BudgetItemType;
      }

      return item;
    });

    setBudget({
      ...budget,
      items: itemsUpdated,
    });
  };

  const handleChanged = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    const name = event.target.name;

    if (setBudget) {
      setBudget({
        ...budget,
        [name]: value,
      });
    }
  };

  const handleAddItem = () => {
    const items = Array.from(budget.items);

    items.push({
      description: "",
      quantity: 0,
      total: 0,
    });

    if (setBudget) {
      setBudget({
        ...budget,
        items,
      });
    }
  };

  const handleRemoveItem = (index: number) => {
    const items = budget.items.filter((_, itemIndex) => itemIndex !== index);

    if (setBudget) {
      setBudget({
        ...budget,
        items,
      });
    }
  };

  return (
    <Grid spacing={2} container>
      <Grid item xs={12}>
        <Typography variant="h6">Seus Dados</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={budget.companyName}
          name="companyName"
          onChange={handleChanged}
          label="Nome da empresa"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Dados do cliente</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="customerName"
          value={budget.customerName}
          onChange={handleChanged}
          label="Nome"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h6">Itens</Typography>
          <Button onClick={handleAddItem} variant="contained">
            Adicionar
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {budget.items.map((item, index) => (
            <Grid item xs={12}>
              <Paper style={{ padding: theme.spacing(3) }} elevation={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      name="description"
                      value={item.description}
                      onChange={(e) => handleItemChanged(index, e)}
                      label="Descrição"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="quantity"
                      value={item.quantity}
                      onChange={(e) => handleItemChanged(index, e)}
                      fullWidth
                      type="number"
                      label="Quantidade"
                      variant="outlined"
                      placeholder="Digite a quantidade"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="total"
                      type="number"
                      value={item.total}
                      onChange={(e) => handleItemChanged(index, e)}
                      fullWidth
                      label="Valor"
                      placeholder="R$ 0,00"
                      variant="outlined"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  {index > 0 ? (
                    <Grid item xs={12}>
                      <Button
                        onClick={() => handleRemoveItem(index)}
                        variant="contained"
                      >
                        Remover
                      </Button>
                    </Grid>
                  ) : null}
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Mais informações</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="obs"
          value={budget.obs}
          onChange={handleChanged}
          multiline
          rows={4}
          label="Observações"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleClickGeneratePDF} fullWidth variant="contained">
          Gerar PDF
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewBudgetForm;
