import { useEffect, useState } from "react";

export default function Insights() {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("papers")) || [];

  if (stored.length !== papers.length) {
    setPapers(stored);
  }
}, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📊 Research Insights</h1>

      <div style={styles.grid}>

        <div style={styles.card}>
          <h2 style={{ ...styles.heading, color: "#4f46e5" }}>
            📌 Key Learnings
          </h2>
          <ul>
            {papers.map((p, i) => (
              <li key={i}>{p.name} uses advanced techniques.</li>
            ))}
          </ul>
        </div>

        <div style={styles.card}>
          <h2 style={{ ...styles.heading, color: "#ef4444" }}>
            ⚠ Contradictions
          </h2>
          <p>Different approaches like ML vs DL are used.</p>
        </div>

        <div style={styles.card}>
          <h2 style={{ ...styles.heading, color: "#22c55e" }}>
            🔬 Method Trends
          </h2>
          <p>Most papers use AI-based techniques.</p>
        </div>

        <div style={styles.card}>
          <h2 style={{ ...styles.heading, color: "#f59e0b" }}>
            🚧 Research Gaps
          </h2>
          <p>Lack of real-time implementation.</p>
        </div>

        <div style={styles.card}>
          <h2 style={{ ...styles.heading, color: "#6366f1" }}>
            🚀 Future Scope
          </h2>
          <p>Better datasets and real-time systems.</p>
        </div>

        <div style={styles.card}>
          <h2 style={{ ...styles.heading, color: "#06b6d4" }}>
            📈 Stats Summary
          </h2>
          <p>Total Papers: {papers.length}</p>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    minHeight: "100vh",
    background: "linear-gradient(to right, #eef2ff, #f8fafc)",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "32px",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "20px",
    borderRadius: "20px",
    background: "white",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
  heading: {
    marginBottom: "10px",
  },
};