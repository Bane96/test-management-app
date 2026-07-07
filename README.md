# Test Management App

A small web application for managing a team's test cases — create, edit, delete, search, filter, and sort.
A React application for managing test cases with search, filtering, sorting and persistence.

## Features

- Create tests
- Edit tests
- Delete tests
- Search by name
- Filter by status
- Sort by:
    - Name
    - Status
    - Last Modified
- Local persistence using LocalStorage

## Tech Stack

- React
- TypeScript
- Vite for the build setup
- Plain CSS (no framework), organized under src/assets/css/
- localStorage for persistence — no backend, no database

## Installation

npm install

npm run dev

The app will be available at http://localhost:5173.

To create a production build:

npm run build

## Future Improvements

- Unit tests
- E2E tests
- Backend integration
- Confirm dialogs before deleting a test — right now delete is immediate. In a real app this would need a confirmation step.
- Full modal accessibility — the form has role="dialog" and aria-modal, but is missing a proper focus trap and focus return on close.