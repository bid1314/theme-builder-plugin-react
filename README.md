# Theme Builder Plugin

An Elementor-style theme/site builder built with React components for integration into multi-tenant applications.

## Overview

This is a feature-rich live theme builder that allows users to dynamically build their themes, pages, and layouts with a live preview interface. The plugin is designed to be integrated into existing Vite/React/Supabase/TypeScript applications.

## Features

- Live theme builder with drag-and-drop interface
- Component palette with pre-built UI components
- Real-time preview panel
- Properties panel for component customization
- Template saving and management
- Category management for components
- Display conditions for dynamic content

## Local Development

This project runs on Vite for fast development and hot module replacement.

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:8000`

### Build for Production

```bash
npm run build
```

### Integration

This plugin is designed to be integrated into your main application. The components can be imported and used within your existing Vite/React/Supabase/TypeScript setup.

## Project Structure

- `/components` - Reusable UI components and builder components
- `/hooks` - Custom React hooks
- `/lib` - Utility functions and type definitions
- `/app` - Main application pages and layout
- `/public` - Static assets
