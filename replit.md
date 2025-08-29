# Overview

This is an Nx monorepo workspace containing a React Router v7 application with server-side rendering (SSR) capabilities. The project is set up as a modern full-stack React application using Vite as the build tool and development server. The workspace follows Nx's monorepo structure with a single client application and corresponding end-to-end tests.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Monorepo Structure
- **Framework**: Nx workspace for managing multiple projects and dependencies
- **Build System**: Vite for fast development and optimized production builds
- **Package Management**: Uses workspace-level dependency management with project-specific configurations

## Frontend Architecture
- **Framework**: React 19 with TypeScript
- **Routing**: React Router v7 with file-based routing system
- **Rendering Strategy**: Server-Side Rendering (SSR) enabled by default
- **Styling**: Tailwind CSS with PostCSS for utility-first styling
- **Development Server**: Vite dev server running on port 4200

## Application Structure
- **Entry Points**: Separate client and server entry points for hydration and SSR
- **Routing Configuration**: Centralized route configuration in `routes.tsx` with index and about routes
- **Component Structure**: Root layout component with navigation and outlet for route components
- **Build Output**: Compiled to `dist` directory with CommonJS module transformation

## Development Tooling
- **Testing**: Vitest for unit testing with jsdom environment and React Testing Library
- **E2E Testing**: Playwright for end-to-end testing across multiple browsers
- **Code Quality**: ESLint with React-specific rules and TypeScript integration
- **Type Checking**: Strict TypeScript configuration with composite project references

## Build Configuration
- **TypeScript**: Strict mode enabled with ES2022 target and bundler module resolution
- **Vite**: Configured for React Router integration with SSR support
- **PostCSS**: Integrated with Tailwind CSS for style processing
- **Asset Optimization**: Compression reporting and mixed ES module transformation

# External Dependencies

## Core Framework Dependencies
- **React Router v7**: Full-stack React framework with SSR capabilities (`@react-router/dev`, `@react-router/node`, `@react-router/serve`)
- **React 19**: Latest React version with concurrent features
- **Vite**: Modern build tool and development server

## Development Tools
- **Nx**: Monorepo management and build orchestration (`@nx/react`, `@nx/vite`, `@nx/eslint`)
- **TypeScript**: Static type checking with strict configuration
- **ESLint**: Code linting with React and accessibility plugins
- **Vitest**: Fast unit testing framework
- **Playwright**: Cross-browser end-to-end testing

## Styling and UI
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer
- **Google Fonts**: Inter font family integration

## Bot Detection and Performance
- **isbot**: User agent detection for crawler optimization
- **SWC**: Fast TypeScript/JavaScript compiler for better performance

## Cloud Services
- **Nx Cloud**: Build acceleration and caching (ID: 68b1257be8677d4671b443cc)