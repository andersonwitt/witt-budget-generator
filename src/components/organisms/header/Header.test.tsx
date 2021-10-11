import { Money } from "@mui/icons-material";
import { render } from "@testing-library/react";
import Header from "./";

describe("Header", () => {
  it("Should render Header", () => {
    const { getByRole } = render(<Header title="Test" />);

    expect(getByRole("group", { name: "header" })).toBeInTheDocument();
  });

  it("Should render title", () => {
    const expectedTitle = "Im just a title.";

    const { getByText } = render(<Header title={expectedTitle} />);

    expect(getByText(expectedTitle)).toBeInTheDocument();
  });

  it("Should render icon", () => {
    const expectedIcon = <Money />;

    const { getByTestId } = render(<Header title="Test" icon={expectedIcon} />);

    expect(getByTestId("MoneyIcon")).toBeInTheDocument();
  });

  it("Should render icon color", () => {
    const expectedBackgroundColor = "#000000";
    const { getByRole } = render(
      <Header title="Test" backgroundColor={expectedBackgroundColor} />
    );

    expect(getByRole("group", { name: "avatar-header" })).toHaveStyle(
      `background-color: ${expectedBackgroundColor}`
    );
  });

  it("Should render avatar color", () => {
    const expectedBackgroundColor = "#000000";
    const { getByRole } = render(
      <Header title="Test" color={expectedBackgroundColor} />
    );

    expect(getByRole("group", { name: "avatar-header" })).toHaveStyle(
      `color: ${expectedBackgroundColor}`
    );
  });
});
