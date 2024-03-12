import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={["17:00", "17:30"]}/>);
  const headingElement = screen.getByText("Book a table at our restaurant");
  expect(headingElement).toBeInTheDocument();
});