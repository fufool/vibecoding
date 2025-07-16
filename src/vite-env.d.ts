/// <reference types="vite/client" />

// Global type declaration for navigation
declare global {
  interface Window {
    navigate: (path: string) => void;
  }
}

export {}
