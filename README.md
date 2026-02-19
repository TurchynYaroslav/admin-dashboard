# 🛡️ Admin Management System

A modern, high-performance **administrative dashboard** for managing user accounts.

This project provides a clean and scalable interface for **creating, editing, viewing, and deleting users**, with a strong focus on **type safety, predictable state management, and reusable UI architecture**.

---

## ✨ Key Features

- **User Management**  
  Full CRUD operations (Create, Read, Update, Delete) for user accounts.

- **Dynamic Data Table**  
  Structured and reusable table component for displaying user data.

- **Modal-Based Forms**  
  User creation and editing via a shared modal with controlled inputs and validation.

- **Configuration-Driven Forms**  
  Forms are rendered from typed field configurations instead of hardcoded JSX.

- **Responsive Layout**  
  Clean, admin-style layout with a dedicated page header and action toolbar.

- **Scalable Architecture**  
  Feature-based structure designed for long-term maintainability.

---

## 🚀 Quick Start

### Prerequisites

- Node.js **v18+**
- npm or yarn

### Installation

Clone the repository:

````bash
git clone https://github.com/your-username/admin-panel.git
````

Install dependencies:
````
bash
npm install

#Run the development server:
npm run dev
````

## 🛠 Tech Stack

| Tool             | Purpose                         |
| ---------------- | ------------------------------- |
| **React**        | UI library                      |
| ---------------- | ------------------------------- |
| **TypeScript**   | Static typing & domain modeling |
| ---------------- | ------------------------------- |
| **Vite**         | Build tool & dev server         |
| ---------------- | ------------------------------- |
| **React Router** | Navigation & routing            |
| ---------------- | ------------------------------- |
| **Tailwind CSS** | Utility-first styling           |
| ---------------- | ------------------------------- |

## 🧠 Architecture Overview

The project follows a feature-based architecture, keeping business logic, UI, and shared utilities clearly separated.

```
src/
├── entities/    # Core domain models (e.g. User types)
├── features/    # User-related logic (create, edit, delete)
├── widgets/     # Page-level UI blocks (Headers, Tables)
├── shared/      # Reusable UI components (Button, Input, Modal)
└── pages/       # Route-level components
```

### Key architectural principles

#### Domain vs Form separation

- **User** → domain entity (always valid)
- **UseForm** → form state (can be incomplete)

#### Single source of truth

- User list state is owned by the page-level component

#### Dumb UI components

- UI elements emit events instead of mutating state
- Business logic lives in parent components

#### Explicit data flow

- Parent components control logic
- Children remain reusable and predictable

---

## 🎯 Project Purpose

This project is built to demonstrate:

- Real-world React state management
- Strong TypeScript usage in form-heavy interfaces
- Clean separation of concerns
- Scalable patterns for SaaS and admin dashboards
