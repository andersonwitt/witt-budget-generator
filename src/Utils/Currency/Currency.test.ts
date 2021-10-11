import CurrencyUtils from ".";

describe("Currency Utils", () => {
  it("Should return value formated", () => {
    const value = 1053.456;
    const expectedResult = "1.053,46";

    const result = CurrencyUtils.getFormatDefault(value);

    expect(result).toBe(expectedResult);
  });

  it("Should return '-' when there is no value", () => {
    const value = 0;
    const expectedResult = " - ";

    const result = CurrencyUtils.getFormatDefault(value);

    expect(result).toBe(expectedResult);
  });
});
