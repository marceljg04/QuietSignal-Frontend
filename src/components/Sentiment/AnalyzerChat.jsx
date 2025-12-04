import { useState } from "react";

export default function AnalyzerChat() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  const handleAddMessage = () => {
    setError("");
    if (!text.trim()) {
      setError("Please enter a phrase");
      return;
    }
    setMessages([...messages, text.trim()]);
    setText("");
  };

  const handleSendAll = () => {
    if (messages.length === 0) {
      setError("No phrases to analyze");
      return;
    }
    console.log("Sending phrases to backend:", messages);
    alert(`Sending ${messages.length} phrases to backend...`);

    // Reset messages si quieres limpiar
    // setMessages([]);
  };

  return (
    <div className="analyzer-container">
      {error && <p className="error-text">{error}</p>}

      <div className="flex mb-3">
        <textarea
          className="textarea"
          placeholder="Enter a phrase..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          className="btn btn-success ml-2"
          onClick={handleAddMessage}
        >
          Add
        </button>
      </div>

      {messages.length > 0 && (
        <div className="mb-3 p-3 border rounded max-h-60 overflow-y-auto bg-gray-50">
          {messages.map((msg, idx) => (
            <p key={idx} className="mb-1">
              {idx + 1}. {msg}
            </p>
          ))}
        </div>
      )}

      <button
        className="btn btn-primary"
        onClick={handleSendAll}
        disabled={messages.length === 0}
      >
        Send All
      </button>
    </div>
  );
}
