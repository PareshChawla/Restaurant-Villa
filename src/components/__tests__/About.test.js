import { render, screen } from "@testing-library/react";
import About from "../../components/About";
import "@testing-library/jest-dom";


it("Should render heading of about component", () => {
    render(<About />);

    const heading = screen.getByText(/About/);

    expect(heading).toBeInTheDocument();

});