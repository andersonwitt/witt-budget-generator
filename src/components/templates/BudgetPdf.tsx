import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import font from "../../assets/fonts/Assistant-Regular.ttf";

import { BudgetType } from "../../contexts/Budget";
import CurrencyUtils from "../../Utils/Currency";

Font.register({
  family: "Assistant",
  src: font,
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingRight: 0,
  },
  divider: {
    width: "100%",
    height: 30,
    borderStyle: "solid",
    borderWidth: 2,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  circleContainer: {
    position: "relative",
    borderWidth: 1,
    borderColor: "#000",
    height: 85,
    width: 85,
    left: 255,
    borderRadius: 42.5,
    top: 70,
  },
  circleItem: {
    position: "absolute",
    backgroundColor: "#000",
    height: 80,
    width: 80,
    borderRadius: 40,
    left: 1.8,
    top: 1.8,
  },
  section: {
    marginTop: 60,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  sectionCenter: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  box: {
    marginTop: 10,
    paddingRight: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    width: "100%",
  },
  boxLeft: {
    marginTop: 10,
    paddingLeft: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    width: "100%",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    marginTop: 20,
    borderWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    padding: "15px 0px",
    width: "20%",
    borderStyle: "solid",
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  tableColFooter: {
    padding: "15px 0px",
    width: "20%",
    borderWidth: 0,
  },
  firstTableCol: {
    padding: "15px 0px",
    width: "40%",
    borderStyle: "solid",
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  firstTableColFooter: {
    padding: "15px 0px",
    width: "40%",
    borderWidth: 0,
  },
  tableHeaderCol: {
    width: "20%",
    padding: "10px 0px",
    borderStyle: "solid",
    borderWidth: 2,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  firstTableHeaderCol: {
    width: "40%",
    padding: "10px 0px",
    borderStyle: "solid",
    borderWidth: 2,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  tableHeaderCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 14,
    fontFamily: "Assistant",
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 9,
    fontFamily: "Assistant",
  },
  tableFooterCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 12,
    fontFamily: "Assistant",
  },
});

interface IBudgetPdfProps {
  budget: BudgetType;
}

// Create Document Component
const BudgetPDF: React.FC<IBudgetPdfProps> = ({ budget }) => {
  const getGrandSubtotal = () => {
    const result = calculateGrandSubtotal();

    return CurrencyUtils.getFormatDefault(result);
  };

  const getGrandTotal = () => {
    const result = calculateGrandTotal();

    return CurrencyUtils.getFormatDefault(result);
  };

  const calculateGrandTotal = () => {
    const result = budget.items.reduce(
      (total, current) => current.quantity * current.total + total,
      0
    );
    return result;
  };

  const calculateGrandSubtotal = () => {
    const result = budget.items.reduce(
      (total, current) => current.total + total,
      0
    );
    return result;
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.circleContainer}>
          <View style={styles.circleItem} />
        </View>
        <View style={styles.divider} />
        <View style={styles.section}>
          <Text style={{ fontFamily: "Assistant", fontSize: 18 }}>
            {budget.companyName}
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={{ color: "#616161", fontSize: 12 }}>
            {budget.companyName}
          </Text>
          <Text style={{ color: "#616161", fontSize: 12 }}>
            Rua Gabriel Eyng, Forquilhinha
          </Text>
          <Text style={{ color: "#616161", fontSize: 12 }}>
            +55(48)999656396
          </Text>
          <Text style={{ color: "#616161", fontSize: 12 }}>
            anderson@wittsistemas.com
          </Text>
          <Text style={{ color: "#616161", fontSize: 12 }}>
            wittsistemas.com
          </Text>
        </View>
        <View style={styles.boxLeft}>
          <Text style={{ color: "#616161", fontSize: 12 }}>Orçamento para</Text>
          <Text style={{ color: "#616161", fontSize: 18 }}>
            {budget.customerName}
          </Text>
          <Text style={{ color: "#616161", fontSize: 10 }}>
            02 de Outubro de 2021
          </Text>
        </View>
        <View style={styles.table}>
          {/* TableHeader */}
          <View style={styles.tableRow}>
            <View style={styles.firstTableHeaderCol}>
              <Text style={styles.tableHeaderCell}>Descrição</Text>
            </View>
            <View style={styles.tableHeaderCol}>
              <Text style={styles.tableHeaderCell}>Quantidade</Text>
            </View>
            <View style={styles.tableHeaderCol}>
              <Text style={styles.tableHeaderCell}>Subtotal</Text>
            </View>
            <View style={styles.tableHeaderCol}>
              <Text style={styles.tableHeaderCell}>Total</Text>
            </View>
          </View>
          {/* TableContent */}
          {budget.items.map((item) => (
            <View style={styles.tableRow}>
              <View style={styles.firstTableCol}>
                <Text style={styles.tableCell}>{item.description}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.quantity}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  R$ {CurrencyUtils.getFormatDefault(item.total)}
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  R${" "}
                  {CurrencyUtils.getFormatDefault(item.total * item.quantity)}
                </Text>
              </View>
            </View>
          ))}
          {/* TableFooter */}
          <View style={styles.tableRow}>
            <View style={styles.firstTableColFooter}>
              <Text style={styles.tableFooterCell}></Text>
            </View>
            <View style={styles.tableColFooter}>
              <Text style={styles.tableFooterCell}></Text>
            </View>
            <View style={styles.tableColFooter}>
              <Text style={styles.tableFooterCell}>Subtotal:</Text>
            </View>
            <View style={styles.tableColFooter}>
              <Text style={styles.tableFooterCell}>
                R$ {getGrandSubtotal()}
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.firstTableColFooter}>
              <Text style={styles.tableFooterCell}></Text>
            </View>
            <View style={styles.tableColFooter}>
              <Text style={styles.tableFooterCell}></Text>
            </View>
            <View style={styles.tableColFooter}>
              <Text style={styles.tableFooterCell}>Total:</Text>
            </View>
            <View style={styles.tableColFooter}>
              <Text style={styles.tableFooterCell}>
                R${getGrandTotal()}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default BudgetPDF;
