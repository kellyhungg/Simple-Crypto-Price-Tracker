---
id: challenges-and-solutions
title: Challenges & Solutions
---

# Challenges & Solutions

During the development of this Work Trial Task, several challenges were encountered:

## API Rate Limits
- **Challenge:**  
  The CoinGecko API imposes rate limits, which can lead to errors if too many requests are made in a short time.
- **Solution:**  
  React Query’s caching mechanism minimizes redundant requests, reducing the risk of hitting rate limits.

## Adapting to Next.js 13 App Directory
- **Challenge:**  
  Next.js 13 uses the new app directory, which requires marking client components with `"use client"` for hooks like `useState`.
- **Solution:**  
  All components requiring client-side behavior (e.g., those using hooks) are prefixed with `"use client"` to ensure proper rendering.

## Error Handling in API Integration
- **Challenge:**  
  Properly handling various error scenarios (network issues, API errors) to provide clear feedback to the user.
- **Solution:**  
  Implemented robust error handling in the API fetching function using try-catch blocks, along with React Query’s onError callback. The UI displays user-friendly error messages and offers a retry option.

## Managing Asynchronous Data State
- **Challenge:**  
  Ensuring seamless data fetching, caching, and updating for a real-time dashboard.
- **Solution:**  
  The use of React Query greatly simplified state management by automatically handling caching, background refetching, and error states.
