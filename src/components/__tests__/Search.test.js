import { act, fireEvent, render, waitFor } from "@testing-library/react";
import MOCK_DATA from "../../../__mocks__/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search restaurant list for pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
      
      const searchBtn = screen.getByRole("button");

      const searchInput = screen.getByPlaceholderText("Search");
      
      fireEvent.change(searchInput, {target: {value: "tiffin"}});

      fireEvent.click(searchBtn);
});
