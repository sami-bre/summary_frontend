import React, { useState } from "react";
import "./index.css";

const ArticleSummaryGenerator = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Please enter a title.");
      return;
    }
    const generatedSummary = `Summary for: ${title}`;
    setSummary(generatedSummary);
  };

  return (
    <div>
      <h1>Article Summary Generator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Details:
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Generate Summary</button>
      </form>
      {summary && (
        <div className="generated-summary">
          <h2>Generated Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default ArticleSummaryGenerator;