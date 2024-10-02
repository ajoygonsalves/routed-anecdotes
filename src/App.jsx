import { useEffect, useState } from "react";
import {
  Outlet,
  Route,
  Routes,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import AnecdoteList from "./components/AnecdoteList";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import { useNavigation, useNavigate } from "react-router-dom";

const App = () => {
  const [notification, setNotification] = useState("");
  const location = useLocation();
  const anecdotes = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.content) {
      setNotification(`${location.state.content} anecdote created`);
      const timer = setTimeout(() => {
        setNotification("");
        navigate(location.pathname, { replace: true, state: {} });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

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
