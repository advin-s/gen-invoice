# gen-invoice


This is an invoice management system that allows users to manage their invoices, save them as drafts, and submit them for processing. The application also features a token-based authentication system for security and session management.

## Features

- User authentication with token management.
- Dashboard for managing invoices.
- Ability to save invoices as drafts.
- Submit invoices for processing.
- Automatic logout after session expiration, logs out in 5 minutes.
- Toast notifications for feedback on save and save as draft.

## Tech Stack

- **React**: Frontend framework
- **React Router**: For navigation and routing.
- **Formik**: For form handling and validation.
- **Yup**: For form validation (though you can replace it with custom validation logic).
- **LocalStorage**: To store session data (authentication token, expiration time).
- **TailwindCSS**: For styling the components.
- **DummyJSON**: For backend authentication service

for more info : https://dummyjson.com/

## Setup and Installation

Follow the instructions below to set up and run this project locally.
Credentials:
username: emilys
password: emilyspass

### Clone the Repository

```bash
git clone https://github.com/advin-s/gen-invoice.git
cd gen-invoice
