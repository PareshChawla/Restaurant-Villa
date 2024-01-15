import { screen, render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case" , () => {
    it("Loads submit button in Contact", () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    
    });
    
    it("Loads heading in Contact", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
    });
})

