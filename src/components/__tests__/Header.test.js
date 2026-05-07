import { render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import {store} from "../../store/store";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../../utils/UserContext";

it("Should load Login button on Header", () => {
  //Render the component
  render(
    <Provider store={store}>
      <BrowserRouter>
      <UserContext.Provider value={{loggedInUser: "Test User"}}>
        <Header />
        </UserContext.Provider>
      </BrowserRouter>
    </Provider>,
  );

  // Find the element or Query the element
  const loginButton = screen.getByText("Login");

  // Assertion
  expect(loginButton).toBeInTheDocument();
});
