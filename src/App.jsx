import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import AnecdoteList from "./components/AnecdoteList";
import CreateNew from "./components/CreateNew";
import { useLoaderData } from "react-router-dom";

const App = () => {
  const [notification, setNotification] = useState("");

  const anecdotes = useLoaderData();

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };
  };

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
