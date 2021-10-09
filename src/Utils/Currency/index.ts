import currencyFormatter from "currency-formatter";

interface ICurrencyUtils {
  getFormatDefault: (value: number) => string;
}

const CurrencyUtils: ICurrencyUtils = {
  getFormatDefault: (value: number) => {
    if (value) {
      return currencyFormatter.format(value, {
        symbol: "",
        decimal: ",",
        thousand: ".",
        precision: 2,
        format: "%v", // %s is the symbol and %v is the value
      });
    }
    return ' - ';
  },
};

export default CurrencyUtils;
