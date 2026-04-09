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

## Features

## Manager Dashboard Page

The **Manager Dashboard** provides a centralized overview of team leave activity, enabling managers to monitor employee availability.

---

### Features

- **Dashboard Metrics**
  - Total number of employees
  - Employees currently on leave (today)
  - Employees scheduled for leave (tomorrow)

- **Leave Insights**
  - **Currently on Leave**: Displays employees who are on leave today
  - **Upcoming Leaves**: Shows scheduled leaves for upcoming days

- **Real-time Data Fetching**
  - Automatically fetches and updates leave data based on:
    - Leave status (`ongoing`, `upcoming`)
    - Scope (`organization`)

- **Error & Loading Handling**
  - Loading indicators for API calls
  - Graceful error messages when data fetching fails

---

### Component Structure

#### 1. `ManagerDashboard`

Main container component responsible for:

- Fetching dashboard metrics
- Rendering metric cards
- Displaying leave lists

#### 2. `useLeaves` (Custom Hook)

Handles:

- Fetching leave data
- Managing loading and error states
- Providing a refresh mechanism

#### 3. DashboardMetricsCard

Displays key metrics such as:

- Total Employees
- On Leave Today
- On Leave Tomorrow

#### 4. LeaveCardItem

Reusable card component to display:

- Employee name
- Leave duration/date
- Leave type badge

---
