// API Configuration
// In development, use relative path (Vite proxy handles it)
// In production, set VITE_API_URL environment variable to your backend URL
export const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'
console.log(API_URL)

