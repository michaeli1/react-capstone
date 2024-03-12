import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const reserveTable = screen.getByText("Reserve Table");
  expect(reserveTable).toBeInTheDocument();

  const reserveTableButton = screen.getByRole("button");
  fireEvent.click(reserveTableButton);

  const chooseTimeLabel = screen.getByText("Choose Time");
  expect(chooseTimeLabel).toBeInTheDocument();
});
