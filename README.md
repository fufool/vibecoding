# Vibecode - React TypeScript Project

Vibecode is a modern React application built with TypeScript and Vite, designed for fast development and optimal performance.

## Features

- ⚡️ **Vite** - Lightning fast build tool and development server
- ⚛️ **React 18** - Latest React with concurrent features
- 🔷 **TypeScript** - Type safety and enhanced developer experience
- 🎨 **Modern CSS** - CSS modules support for component styling
- 🔧 **ESLint** - Code linting and formatting
- 🔥 **Hot Module Replacement** - Instant updates during development

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the application in your browser.

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
vibecode/
├── public/          # Static assets
├── src/             # Source code
│   ├── assets/      # Images, icons, etc.
│   ├── App.tsx      # Main App component
│   ├── main.tsx     # Application entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
├── tsconfig.json    # TypeScript configuration
├── vite.config.ts   # Vite configuration
└── README.md        # This file
```

## Development Guidelines

- Use TypeScript for all new components
- Follow React functional components with hooks
- Use modern ES6+ syntax
- Implement responsive design patterns
- Write clean, maintainable code with proper documentation

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
