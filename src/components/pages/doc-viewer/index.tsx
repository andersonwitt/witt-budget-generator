import { PDFViewer } from "@react-pdf/renderer";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import BudgetPDF from "../../templates/BudgetPdf";
import { BudgetContext } from "../../../contexts/Budget";

const DocViewer: React.FC = () => {
  var history = useHistory();
  const { budget } = useContext(BudgetContext);

  useEffect(() => {
    if (budget.items.some((item) => item.quantity <= 0)) {
      history.push("/budget");
    }
  }, [budget.items, history]);

  return (
    <PDFViewer width="100%" height={500}>
      <BudgetPDF budget={budget} />
    </PDFViewer>
  );
};

export default DocViewer;
