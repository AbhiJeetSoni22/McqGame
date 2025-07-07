# MCQ Game

A modern multiple-choice quiz game built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Interactive quiz with animated transitions
- Score tracking and progress bar
- Responsive design with Tailwind CSS
- Smooth page navigation using React Router
- Animated backgrounds and effects

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/mcqgame.git
   cd mcqgame
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running Locally

Start the development server:
```sh
npm run dev
# or
yarn dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

To build the app for production:
```sh
npm run build
# or
yarn build
```
The output will be in the `dist` folder.

### Preview Production Build

```sh
npm run preview
# or
yarn preview
```

## Deployment

You can deploy the `dist` folder to any static hosting service (e.g., Vercel, Netlify).

For **Vercel**:
- Set the **build command** to `vite build`
- Set the **output directory** to `dist`
- Set the **install command** to `npm install`

## Project Structure

```
src/
  assets/           # Static assets
  components/       # Reusable components (Navbar, Question, Score)
  data/             # Quiz questions data
  pages/            # Page components (Home, Quiz)
  App.jsx           # Main app component
  main.jsx          # Entry point
  index.css         # Global styles
public/
  vite.svg          # Favicon
```