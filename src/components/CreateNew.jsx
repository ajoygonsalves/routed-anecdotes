import { useState } from "react";
import { createAnecdote } from "./services/anecdotes";
import { useNavigate, useNavigation, useFetcher } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { Form } from "react-router-dom";
import { useField } from "../hooks";

const CreateNew = () => {
  const { reset: resetContent, ...content } = useField("text", "content");
  const { reset: resetAuthor, ...author } = useField("text", "author");
  const { reset: resetInfo, ...info } = useField("text", "info");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const submission = {
      content: content.value,
      author: author.value,
      info: info.value,
    };
    createAnecdote(submission);
    navigate("/", { state: submission });
  };

  const handleReset = () => {
    resetContent();
    resetAuthor();
    resetInfo();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <Form method="post" id="anecdote-form" onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button>create</button>
        <input type="reset" onClick={handleReset} />
      </Form>
    </div>
  );
};

export default CreateNew;
