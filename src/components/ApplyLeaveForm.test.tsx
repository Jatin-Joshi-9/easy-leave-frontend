import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi, beforeEach } from 'vitest';
import ApplyLeaveForm from './ApplyLeaveForm';
import * as leaveCategoriesApi from '@/api/leaveCategories.api';
import userEvent from '@testing-library/user-event';

const mockCategories = [
  { id: '1', name: 'Annual Leave' },
  { id: '2', name: 'Bereavement Leave' },
];

describe('ApplyLeaveForm', () => {
  const mockRefreshLeaves = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.spyOn(leaveCategoriesApi, 'fetchLeaveCategories').mockResolvedValue(mockCategories);
  });

  test('renders all form fields', async () => {
    render(<ApplyLeaveForm refreshLeaves={mockRefreshLeaves} />);

    expect(await screen.findByLabelText('Leave Category')).toBeInTheDocument();

    expect(screen.getByText('Pick a date')).toBeInTheDocument();
    expect(screen.getByLabelText('Duration')).toBeInTheDocument();
    expect(screen.getByLabelText('Start Time')).toBeInTheDocument();
    expect(screen.getByLabelText('End Time')).toBeInTheDocument();
    expect(screen.getByLabelText('Reason')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit Leave' })).toBeInTheDocument();
  });

  test('display required field validation errors', async () => {
    render(<ApplyLeaveForm refreshLeaves={mockRefreshLeaves} />);

    await screen.findByLabelText('Leave Category');

    await userEvent.click(screen.getByRole('button', { name: 'Submit Leave' }));

    expect(await screen.findByText('Leave category is required')).toBeInTheDocument();
    expect(screen.getByText('Please enter a date')).toBeInTheDocument();
    expect(screen.getByText('Description is required')).toBeInTheDocument();
  });

  test('displays error when description exceeds 1000 characters', async () => {
    render(<ApplyLeaveForm refreshLeaves={mockRefreshLeaves} />);

    const leaveCategoryInput = await screen.findByLabelText('Leave Category');
    await userEvent.selectOptions(leaveCategoryInput, '1');
    const descriptionInput = screen.getByLabelText('Reason');
    const longDescription = 'a'.repeat(1001);
    fireEvent.change(descriptionInput, { target: { value: longDescription } });
    await userEvent.click(screen.getByRole('button', { name: 'Submit Leave' }));

    const validationErrors = await screen.findByTestId('errors-description-input');
    expect(validationErrors.innerHTML).toBe('Description cannot be over 1000 characters');
  });
});
