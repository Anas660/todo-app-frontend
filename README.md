## TODO app

This repository demonstrates a simple task management application built with Next.js, featuring task creation, update, and color selection functionalities. It integrates with a backend for persistent task data storage

# What's been done

- Create and update tasks with titles and color options
- Visual color selection for tasks.
- Simple UI for managing tasks using Tailwind CSS.
- Integrated form handling with react-hook-form and Zod validation.

# Environment Setup

Node Version: v20.10.0

# Preparation

Follow the steps below to run the project locally.
In the todo-app-frontend repo `git clone main`
Navigate to the project directory `cd <repository-directory>`
Install dependencies `npm install`
Run the development server `npm run dev`

### Test Scenarios

- [ ] Visit "localhost:3000" to see the Task Management App, where you can view tasks and create new ones.
- [ ] Click on a task to edit/update

# Tech Stack

Frontend Framework: Next.js
Programming Language: TypeScript
UI Component Library: Tailwind CSS (for custom design) + Shadcn (for components)
Routing: App router
API Requests: Axios

# Approaches Used

Component-Based Architecture
The app follows a modular, component-based structure, making it easier to manage and scale. Each UI element (like buttons, inputs, and modals) is encapsulated in its own reusable component.

TypeScript for Type Safety
TypeScript is used to ensure type safety, helping catch potential errors early in the development process. This improves code quality and maintainability.

Tailwind CSS + Shadcn for UI Design
Tailwind CSS is used to create a custom, responsive layout for the app. Shadcn is leveraged for handling modals, offering a better experience compared to Headless UI.

React Hook Form + Zod for Form Management
React Hook Form simplifies form handling with minimal re-renders, while Zod is used for validation. This combination ensures a smoother, more responsive form experience.

Axios for API Requests
Axios is used for making HTTP requests to interact with backend APIs. It's a promise-based library that makes working with asynchronous data fetching simple and clean.
