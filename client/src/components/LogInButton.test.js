import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useAuth0 } from "@auth0/auth0-react";
import LogInButton from "./LogInButton";
import "@testing-library/jest-dom/extend-expect";

jest.mock("@auth0/auth0-react", () => ({
  useAuth0: jest.fn(),
}));

describe("LogInButton", () => {
  test("renders login button correctly", () => {
    const loginWithRedirectMock = jest.fn();
    useAuth0.mockReturnValue({ loginWithRedirect: loginWithRedirectMock });

    render(<LogInButton />);

    const loginButton = screen.getByRole("button", { name: /log in/i });
    expect(loginButton).toBeInTheDocument();

    fireEvent.click(loginButton);
    expect(loginWithRedirectMock).toHaveBeenCalledTimes(1);
  });
});
