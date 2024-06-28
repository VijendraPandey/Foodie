import "@testing-library/jest-dom";
import { MENU_DATA } from "../../mocks/data";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Header from "../Header";
import store from "../../utils/store";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add items to Cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));
  const addBtn = body.getAllByTestId(addBtn);
  fireEvent.click(addBtn[0]);
  const cart = body.getByTestId("cart-items");
  expect(cart.innerHTML).toBe("Cart(1)");
});
