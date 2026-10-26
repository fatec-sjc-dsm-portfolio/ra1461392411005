import { render, screen } from "@testing-library/react";
import App from "./App";

test("renderiza o nome do perfil na página", () => {
  render(<App />);
  expect(screen.getAllByText(/Eduardo da Silva Fontes/i).length).toBeGreaterThan(0);
});
