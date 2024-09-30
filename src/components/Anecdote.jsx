import React from "react";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";

const Anecdote = () => {
  const { anecdoteId } = useParams();
  const { anecdotes } = useLoaderData();

  console.log(anecdotes);

  const anecdote = anecdotes.find(
    (anecdote) => Number(anecdote.id) === Number(anecdoteId)
  );

  return (
    <div>
      <h1>Anecdote</h1>
      <p>Author: {anecdote.author}</p>
      <p>Content: {anecdote.content}</p>
      <p>Votes: {anecdote.votes}</p>
      <p>Info: {anecdote.info}</p>
      <p>Id: {anecdote.id}</p>
    </div>
  );
};

export default Anecdote;
