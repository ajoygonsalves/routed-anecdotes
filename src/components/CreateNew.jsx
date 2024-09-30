import { useState } from "react";
import { createAnecdote } from "./services/anecdotes";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const CreateNew = () => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [info, setInfo] = useState("");
  const navigate = useNavigate();
  const { setAnecdotes } = useOutletContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAnecdote = { content, author, info };
    await createAnecdote(newAnecdote);
    setAnecdotes((prevAnecdotes) => [...prevAnecdotes, createdAnecdote]);
    setContent("");
    setAuthor("");
    setInfo("");
    navigate("/");
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          author
          <input
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          url for more info
          <input
            name="info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default CreateNew;
