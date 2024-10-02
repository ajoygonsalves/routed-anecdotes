import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import AnecdoteList from "./components/AnecdoteList";
import CreateNew from "./components/CreateNew";
import { useLoaderData, useActionData, useLocation } from "react-router-dom";

const App = () => {
  const [notification, setNotification] = useState("");
  const actionData = useActionData();
  const location = useLocation();
  const anecdotes = useLoaderData();

  useEffect(() => {
    if (location.state) {
      setNotification(`${location.state.content} anecdote created`);
      const timer = setTimeout(() => {
        setNotification("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [location]);

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
      {notification && <div className="notification">{notification}</div>}
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
