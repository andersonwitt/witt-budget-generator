import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import Card from ".";

const expectedTitle = "Im a title.";

const renderComponent = (mockCardAction = jest.fn()) =>
  render(<Card title={expectedTitle} cardAction={mockCardAction} />);

describe("Card", () => {
  it("Should render title", () => {
    const { getByText } = renderComponent();

    expect(getByText(expectedTitle)).toBeInTheDocument();
  });

  it("Should call card action mock", () => {
    const mockCardAction = jest.fn();
    const { getByTestId } = renderComponent(mockCardAction);

    const cardAction = getByTestId("card-action");

    act(() => {
      userEvent.click(cardAction);
    });

    expect(mockCardAction).toHaveBeenCalled();
  });
});
