# Admin Dashboard

Admin dashboard built with React and TypeScript featuring a reusable table system and CRUD functionality.

## ✨ Overview

This project demonstrates how to build a scalable admin dashboard with a strong focus on:

- clean architecture
- type safety
- reusable UI components
- clear separation of responsibilities

The dashboard includes a fully reusable table component with configurable columns and action handling, designed to scale for real-world admin panels.

---

## 🧩 Features

- 📊 Reusable generic table component
- 🧱 Config-driven column system
- ✏️ Edit / Delete actions (CRUD-ready)
- 🧠 Strong TypeScript typing with generics
- 🗂 Page-level state management
- 🎨 Styled with Tailwind CSS
- ⚡ Built with Vite for fast development

---

## 🛠 Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router**

---

## 🧠 Architecture Highlights

- **Pages** manage data and state
- **Components** focus on presentation only
- **Reusable Table** is fully generic and data-agnostic
- **Actions logic** is injected via configuration
- **Type-safe column definitions** using discriminated unions

This approach allows easy extension (new columns, new entities, backend integration) without refactoring core UI components.

---

## 📁 Project Structure

```
src/
├─ app/ # App-level setup (router, layouts)
├─ components/ # Reusable UI components
├─ data/ # Mock data
├─ pages/ # Route-level components
├─ services/ # Business logic (future-ready)
├─ types/ # Shared TypeScript models
```

---

## 🚀 Getting Started

Install dependencies:

```bash
npm install

#Run the development server:
npm run dev
```

## 📌 Notes

This project is frontend-only and uses mock data to simulate CRUD flows.
The architecture is designed to allow easy backend integration in the future.
CRUD flows are implemented using local state to simulate real-world backend interactions.
