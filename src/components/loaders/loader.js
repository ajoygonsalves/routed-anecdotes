import { getAnecdotes } from "../services/anecdotes";

export async function anecdotesLoader() {
  const anecdotes = await getAnecdotes();
  return { anecdotes };
}
