import { Facebook } from "@mui/icons-material";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import AppBar from ".";

const expectedTitle = "Im a title.";

const expectedIcon = <Facebook fontSize="large" />;

const renderComponent = (mockOnClickLogo = jest.fn()) =>
  render(
    <AppBar
      onClickLogo={mockOnClickLogo}
      title={expectedTitle}
      icon={expectedIcon}
    />
  );

describe("AppBar", () => {
  it("Should render icon", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId("FacebookIcon")).toBeInTheDocument();
  });

  it("Should render title", () => {
    const { getByText } = renderComponent();
    expect(getByText(expectedTitle)).toBeInTheDocument();
  });

  it("Should call navigate mock to home", () => {
    const mockClick = jest.fn();
    const { getByTestId } = renderComponent(mockClick);

    const button = getByTestId("app-bar-logo");

    act(() => {
      userEvent.click(button);
    });

    expect(mockClick).toHaveBeenCalled();
  });
});
