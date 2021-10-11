import { render } from "@testing-library/react";
import Layout from ".";

const ChildComponent = () => <div data-testid="child-component" />;

const renderComponent = () =>
  render(
    <Layout>
      <ChildComponent />
    </Layout>
  );

describe("Layout", () => {
  it("Should render childreen component", () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId("child-component")).toBeInTheDocument();
  });
  
  it("Should render app-bar component", () => {
    const { getByText } = renderComponent();

    expect(getByText("Orçamento")).toBeInTheDocument();
  });
});
