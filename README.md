# Vue Posts App

A simple Vue.js 3 application with TypeScript, TailwindCSS, and Pinia for managing and displaying posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com).

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/aleksey-kerkin/CFS-test-assignment
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- Vue.js 3
- TypeScript
- TailwindCSS 4.0
- Pinia
- Vite

## Features

- Fetches posts from JSONPlaceholder API
- Pagination (10 posts per page)
- Search functionality for posts
- Individual post pages

## Architecture

The project follows the [Feature-Sliced Design (FSD)](https://feature-sliced.design/) architecture, organizing code into layers:

- `app`: Application setup and providers
- `entities`: Business entities (e.g., Post)
- `features`: Application features (e.g., search, pagination)
- `widgets`: Reusable UI components (e.g., PostCard)
- `pages`: Full pages (e.g., HomePage, PostPage)
- `shared`: Shared utilities and API clients

## Usage

- **Home Page**: Search for posts using the search bar, navigate through pages with pagination controls, and click on a post to view its full content.
- **Post Page**: Displays the full content of a selected post with a link to return to the home page.

## Note

This project is for educational purposes and demonstrates modern Vue.js development practices. It is not intended for production use.
