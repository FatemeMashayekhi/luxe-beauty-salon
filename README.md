# Beauty Salon — Online Appointment Booking

A modern **online appointment booking platform for beauty salons**, built with **Next.js, React, TypeScript, and Tailwind CSS**.

The platform provides a simple and responsive experience for customers to browse salon services, select a staff member, choose an available date and time, and complete their appointment booking.

## ✨ Features

- 📅 Online appointment booking
- 💇 Browse salon services
- 👩‍💼 Select staff member
- 🗓️ Persian/Jalali calendar support
- ⏰ Select available appointment time slots
- 🔐 OTP-based authentication
- 💳 Appointment payment flow
- 📱 Responsive design for mobile, tablet, and desktop
- 🎨 Modern UI with animations
- 🔄 Server state management with React Query
- 🗃️ Client-side state management with Zustand
- 📝 Form validation with Formik and Yup
- 🇮🇷 Persian / RTL interface

## 🛠️ Tech Stack

### Core

- **Next.js 16** — React framework with App Router
- **React 19** — UI library
- **TypeScript** — Static typing
- **Tailwind CSS 4** — Styling and responsive design

### State & Data Management

- **TanStack React Query** — Server state and API data management
- **Zustand** — Client-side state management
- **Axios** — HTTP client

### Forms & Validation

- **Formik** — Form state management
- **Yup** — Form validation

### UI & Animation

- **Radix UI** — Accessible UI primitives
- **Iconify** — Icon system
- **Framer Motion** — Animations and transitions
- **React Slick** — Sliders and carousels

### Date & Calendar

- **Day.js** — Date manipulation
- **Jalaliday** — Jalali calendar support
- **React Multi Date Picker** — Date picker and calendar UI

### Other

- **js-cookie** — Cookie management
- **clsx** — Conditional class names
- **ESLint** — Code quality and linting

## 📁 Project Structure

```text
luxe-beauty-salon/
│
├── api/                  # API-related functionality
│
├── app/                  # Next.js App Router
│   ├── booking/          # Appointment booking pages and flow
│   ├── login/            # Authentication and login pages
│   ├── favicon.ico
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root application layout
│   └── page.tsx          # Home page
│
├── components/           # Reusable UI components
│
├── hooks/                # Custom React hooks
│
├── lib/                  # Shared utilities and helper functions
│
├── Models/               # TypeScript models and data types
│
├── public/               # Static assets
│
├── stores/               # Zustand stores and client-side state
│
├── .gitignore
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies and scripts
├── package-lock.json
├── postcss.config.mjs    # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md
```

## 🔄 Booking Flow

The main appointment booking flow is designed as a simple step-by-step experience:

```text
Home
  ↓
Login / OTP Authentication
  ↓
Select Service
  ↓
Select Staff Member
  ↓
Select Date
  ↓
Select Available Time
  ↓
Review Appointment
  ↓
Payment
  ↓
Booking Confirmation
```

The booking calendar supports the **Persian/Jalali calendar**, providing a localized experience for Persian-speaking users.

## 🔌 API Integration

The frontend communicates with the backend through API requests using **Axios**.

The API layer is responsible for communicating with the backend for operations such as:

- Authentication
- Fetching salon services
- Fetching staff members
- Fetching available dates
- Fetching available time slots
- Creating appointments
- Payment-related requests

**TanStack React Query** is used to manage server-side data fetching, caching, synchronization, loading states, and errors.

## 🗃️ State Management

The project uses **Zustand** for managing client-side application state.

Application stores are organized inside:

```text
stores/
```

Server-side data and asynchronous API state are handled separately using **TanStack React Query**.

This separation keeps client state and server state easier to manage and maintain.

## 📱 Responsive Design

The application is designed to work across different screen sizes:

- 📱 Mobile
- 📲 Tablet
- 💻 Desktop
- 🖥️ Large screens

The booking experience is particularly optimized for mobile users, allowing customers to complete the appointment process easily from their phones.

## 🎯 Project Goals

The main goals of this project are:

- Simplify the salon appointment process
- Reduce manual appointment management
- Make available time slots easier to discover
- Provide a smooth booking experience
- Support Persian users with RTL and Jalali calendar functionality
- Build a maintainable and scalable frontend architecture

## 🚀 Getting Started

### 1. Install dependencies

Using npm:

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the root directory and add the required environment variables.

For example:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

> Add any additional environment variables required by the backend or deployment environment.

### 3. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 📜 Available Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Start the production server  |
| `npm run lint`  | Run ESLint                   |

## 🏗️ Production Build

Create a production build with:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

## 📌 Development

This project is actively developed and its structure, features, and UI may evolve as new requirements are introduced.

---

Built with ❤️ using **Next.js, React, TypeScript, and Tailwind CSS**.
