# Gen-Invoice

Gen-Invoice is an invoice management system that allows users to manage invoices, save them as drafts, and submit them for processing. The application also features token-based authentication for security and session management.

## Features

- **User Authentication**: Token-based system for secure login and session management.
- **Dashboard**: Manage your invoices and view invoice details.
- **Drafts**: Save invoices as drafts for later submission.
- **Submit Invoices**: Submit invoices for processing.
- **Automatic Logout**: Logs out the user after 5 minutes of inactivity.
- **Toast Notifications**: Provides feedback on saving and saving invoices as drafts.

## Tech Stack

- **React**: Frontend framework for building the user interface.
- **React Router**: For navigation and routing across the app.
- **Formik**: For managing forms and handling form validation.
- **Yup**: Schema-based form validation (can be replaced with custom validation logic).
- **LocalStorage**: To store session data (authentication token, expiration time).
- **TailwindCSS**: Utility-first CSS framework for styling.
- **DummyJSON**: Fake API for backend authentication and data handling.
  
  [DummyJSON API](https://dummyjson.com/)

## Setup and Installation

Follow the instructions below to set up and run this project locally.

### Clone the Repository

```bash
git clone https://github.com/advin-s/gen-invoice.git
cd gen-invoice
