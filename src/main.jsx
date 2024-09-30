import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";
import AnecdoteList from "./components/AnecdoteList";
import CreateNew from "./components/CreateNew";
import About from "./components/About";
import Anecdote from "./components/Anecdote";
import { anecdotesLoader } from "./components/loaders/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: anecdotesLoader,
    children: [
      {
        path: "/create",
        element: <CreateNew />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/anecdotes/:anecdoteId",
        element: <Anecdote />,
        loader: anecdotesLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
