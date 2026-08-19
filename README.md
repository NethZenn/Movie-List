# 🎬 Movie List Project

A simple movie list web app built with **React** and **Vite**.

## 🚀 Features

* Browse popular movies
* Search for movies
* Add movies to favorites
* Remove movies from favorites
* Save favorites using `localStorage`
* Responsive movie grid
* React Router navigation

## 🛠️ Built With

* React
* Vite
* React Router
* TMDB API
* CSS
* JavaScript

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/movie-list-project.git
```

Go into the project folder:

```bash
cd movie-list-project
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in your terminal.

## 🔑 API

This project uses the **TMDB API** to get movie information.

You need your own TMDB API key to run the project.

> Never commit your `.env` file or expose your API key publicly.

## 📁 Project Structure

```text
src/
├── components/
│   ├── MovieCard.jsx
│   └── NavBar.jsx
├── contexts/
│   └── MovieContext.jsx
├── css/
├── pages/
│   ├── Favorite.jsx
│   └── Home.jsx
├── services/
│   └── api.js
├── App.jsx
└── main.jsx
```

## 📌 Status

This project was built as a learning project while learning React.

More features and improvements may be added in the future.
