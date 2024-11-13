QuickMeal 🍽️

QuickMeal is a modern, responsive web application for browsing, ordering, and managing meals. Built with React for dynamic functionality, styled with Material UI for an elegant interface, and powered by Vite for optimized build and performance.

Table of Contents

Demo
Features
Tech Stack
Getting Started
Project Structure
Available Scripts

Demo

You can view a live demo of the QuickMeal website here. https://quickmeal-alpha.vercel.app

Features

User-Friendly UI: Intuitive navigation and modern design for a smooth user experience.
Responsive Design: Optimized for desktops, tablets, and mobile devices.
Real-time Search: Quickly find meals using the search functionality.
Order Management: Simple interface for browsing and managing orders.
Efficient Performance: Built with Vite for fast load times and optimized assets.

Tech Stack

React: Frontend JavaScript library for building the UI.
Material UI: Used for consistent and beautiful component styling.
Vite: High-performance build tool optimized for frontend development.
React Router: For single-page application (SPA) navigation.

Getting Started

To get a local copy up and running, follow these steps:

Prerequisites

Node.js (v14 or later)

npm or yarn

Installation

Clone the repo

git clone https://github.com/yourusername/quicmeal.git

Navigate to the project directory

cd quicmeal

Install dependencies

npm install

# or, if using yarn

yarn install

Start the development server

npm run dev

# or, if using yarn

yarn dev

Open your browser and go to http://localhost:5173 to view the application.

Build for Production

To create an optimized build for deployment:

npm run build

# or, if using yarn

yarn build

Project Structure

The main folders and files are structured as follows:

quickmeal/
├── public/              # Static assets like icons, images
├── src/
│   ├── Features/        # Global state with Redux for managing state
│   ├── Extensions/      # Reusable UI components
│   ├── Home/            # Main page components for each route
│   ├── Structures/      # Header and Footer structures for app
│   ├── App.js           # Root component with routing setup
│   ├── App.css          # Custom CSS, styling, and loader animations
│   ├── main.js          # Entry point for the React application
│   └── Notfound.js      # 404 not-found page
├── .gitignore
├── package.json
├── vite.config.js       # Vite configuration
└── README.md


Available Scripts

In the project directory, you can run:

npm run dev: Starts the development server.
npm run build: Builds the app for production.
npm run preview: Serves the built app locally for previewing production build.
npm run lint: Lints the code for style and syntax errors.
