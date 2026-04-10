# EasyLeave - Leave Management System (Frontend)

---

## Tech Stack

- Reactjs (v19+)
- TypeScript
- Tailwind CSS - Styling
- React Router v7 - Page navigation
- Formik - Form handling
- Yup - Form validation
- Vitest - Testing

# All Employees Leave Balance Page

## Overview

This feature adds a new page for managers to view a list of all employees along with their leaves taken and leave balance for a selected year.

## Features

- Manager can view all employees with their leave balance for a selected year
- Year filter dropdown to switch between years
- Paginated list with "Load More" button to fetch next page
- Shows loading state while fetching data
- Shows error message if API fails
- Shows empty state if no employees found

## Tech Stack

- React
- Custom `useEmployees` hook with pagination support
- API calls: `fetchEmployees` and `fetchYears`

## How to Use

1. Log in as a manager
2. Navigate to the All Employees Leave Balance page from the navigation menu
3. Select a year from the dropdown filter
4. View the list of employees with their leave taken and balance
5. Click "Load More" to fetch additional results

## Screenshots

### Web View

![Web View](https://github.com/user-attachments/assets/3b15fb51-1273-48fc-9a22-0fe49b48e319)

### Mobile View

![Mobile View 1](https://github.com/user-attachments/assets/f7bf9d37-8c75-4c2b-9912-a3e377909fcb)

![Mobile View 2](https://github.com/user-attachments/assets/aafedf14-13c1-4531-9167-847ab61a5eae)

## API Endpoints

| Endpoint         | Method | Description                                                            |
| ---------------- | ------ | ---------------------------------------------------------------------- |
| `/api/employees` | GET    | Fetch paginated list of employees with leave balance for selected year |
| `/api/years`     | GET    | Fetch available years for filtering                                    |

## Error Handling

- Displays error message when API call fails
- Shows empty state when no employees found for selected year

## Responsive Design

- Fully responsive across desktop, tablet, and mobile devices
- Navigation and filter dropdown adapts to screen size
- Table view converts to card view on mobile

## Testing

- Unit tests for `useEmployees` hook
- Unit tests for `AllEmployeesLeaveBalance` page component
- Tests cover loading states, error states, empty states, and pagination

## Related Tickets

- [LMS-14 - Manager can get a display list of all employees with leaves taken and leave balance](https://trello.com/c/UDg6SBu3/14-lms-14-manager-can-get-a-display-list-of-all-employees-with-leaves-taken-and-leave-balance)
