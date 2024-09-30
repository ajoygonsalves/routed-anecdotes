import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AnecdoteList = () => {
  const { anecdotes } = useLoaderData();

  const listStyle = {
    display: "flex",
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      <ul className="">
        {anecdotes.map((anecdote) => (
          <li key={anecdote.id}>
            <Link to={`/anecdotes/${anecdote.id}`} style={listStyle}>
              {anecdote.content}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnecdoteList;
