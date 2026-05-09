import { act, fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../../mocks/mockProductsData.json";
import Header from "../Header";
import Body from "../Body";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../../utils/UserContext";
import "@testing-library/jest-dom";

// Mocking the global fetch function to return a resolved promise with the mock data when called in the Body component to fetch products
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should load the products when Body is rendered", async () => {
  // Using act to wrap the render function to ensure that all updates related to the component rendering are processed before making assertions
  await act(async () => {
    render(
      <Provider store={store}>
        <UserContext.Provider
          value={{ loggedInUser: "Anudeepthi", setLoggedInUser: jest.fn() }}
        >
          <BrowserRouter>
            <Body />
          </BrowserRouter>
        </UserContext.Provider>
      </Provider>,
    );
  });

  // Get all elements with the test ID "product-card" which are rendered by the Body component after fetching the products
  const productCards = screen.getAllByTestId("product-card");

  // Assert that the number of product cards rendered matches the length of the mock data products array
  expect(productCards.length).toBe(MOCK_DATA.products.length);
});

it("Should add the product to cart when Add to Cart button is clicked", async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <UserContext.Provider
          value={{ loggedInUser: "Anudeepthi", setLoggedInUser: jest.fn() }}
        >
          <BrowserRouter>
            <Header />
            <Body />
          </BrowserRouter>
        </UserContext.Provider>
      </Provider>,
    );
  });

  const addToCartButtons = screen.getAllByText("Add to Cart");

  // Simulate click event
  fireEvent.click(addToCartButtons[0]);

  // Getting elemnet by data-testid
  const cartElement = screen.getByTestId("cart-link");

  // Assert that the cart element text content has "Cart - (1)"
  expect(cartElement).toHaveTextContent("Cart - (1)");
});
