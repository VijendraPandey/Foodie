import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(50);
  //   console.log(shimmer);
});

test("Restaurant load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search")));

  const res = body.getByTestId("res-list");
  expect(res.children.length).toBe(100);
  //   console.log(res);
});

test("Search for string(food) on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search")));

  const input = body.getByTestId("input");
  fireEvent.change(input, {
    target: {
      value: "bakery",
    },
  });
  const searchBtn = body.getByTestId("search");
  fireEvent.click(searchBtn);
  const res = body.getByTestId("res-list");
  expect(res.children.length).toBe(21);
});
