import { render, screen } from "@testing-library/react";
import MockData from "../../../__mocks__/resCardMock.json";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";

it("should render Restaurant card component with props", () => {
    render(<RestaurantCard resData={MockData}/>)

    const name = screen.getByText("Chicago Pizza");

    expect(name).toBeInTheDocument();
    
})