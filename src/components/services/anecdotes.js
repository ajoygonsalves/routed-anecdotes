import axios from "axios";

const baseUrl = "http://localhost:3000/anecdotes";

const id = () => (100000 * Math.random()).toFixed(0);

export const getAnecdotes = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

export const createAnecdote = async (anecdote) => {
  const newAnecdote = { ...anecdote, id: id(), votes: 0 };
  const res = await axios.post(baseUrl, newAnecdote);
  return res.data;
};
