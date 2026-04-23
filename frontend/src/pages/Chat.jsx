import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();

      const aiMsg = { role: "ai", text: data.answer };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Error getting response." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>

        {/* CHAT AREA */}
        <div style={styles.messages}>
          {messages.map((msg, i) => (
            <div
              key={i}
              style={
                msg.role === "user"
                  ? styles.userMessage
                  : styles.aiMessage
              }
            >
              {msg.text}
            </div>
          ))}

          {loading && (
            <div style={styles.aiMessage}>Typing...</div>
          )}
        </div>

        {/* INPUT AREA */}
        <div style={styles.inputContainer}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your research papers..."
            style={styles.input}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button
            onClick={sendMessage}
            style={styles.button}
            onMouseEnter={(e) =>
              (e.target.style.boxShadow = "0 0 12px #6366f1")
            }
            onMouseLeave={(e) =>
              (e.target.style.boxShadow = "none")
            }
          >
            ➤
          </button>
        </div>

      </div>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #e0e7ff, #f8fafc)",
  },

  chatBox: {
    width: "650px",
    height: "85vh",
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },

  messages: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  userMessage: {
    alignSelf: "flex-end",
    background: "#6366f1",
    color: "#fff",
    padding: "12px 16px",
    borderRadius: "15px",
    maxWidth: "70%",
  },

  aiMessage: {
    alignSelf: "flex-start",
    background: "#1e293b",
    color: "#e2e8f0",
    padding: "12px 16px",
    borderRadius: "15px",
    maxWidth: "70%",
  },

  inputContainer: {
    display: "flex",
    padding: "15px",
    borderTop: "1px solid #ddd",
    background: "#fff",
  },

  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    outline: "none",
  },

  button: {
    marginLeft: "10px",
    padding: "12px 18px",
    borderRadius: "12px",
    border: "none",
    background: "#6366f1",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s",
  },
};