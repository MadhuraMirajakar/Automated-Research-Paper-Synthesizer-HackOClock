import  { useState } from "react";
import { useData } from "../context/DataContext";
import { compareWithTheme } from "../utils/comparePapers";

function Comparison() {
  const { papers } = useData();
  const [theme, setTheme] = useState("");
  const [result, setResult] = useState(null);

  if (!papers || papers.length === 0) {
    return <h2 style={{ padding: "20px" }}>No data available</h2>;
  }

  const handleCompare = () => {
    if (!theme) {
      alert("Please enter research theme");
      return;
    }

    const res = compareWithTheme(papers, theme);
    setResult(res);
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>📊 Research Comparison</h1>

      {/* 🔥 USER INPUT */}
      <div style={styles.inputBox}>
        <input
          type="text"
          placeholder="Enter research theme (e.g. phishing detection using ML)"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleCompare} style={styles.button}>
          Analyze
        </button>
      </div>

      {/* RESULTS */}
      {result && (
        <>
          <Section title="Highly Related" color="#22c55e" papers={result.high} />
          <Section title="Moderately Related" color="#eab308" papers={result.medium} />
          <Section title="Different Papers" color="#ef4444" papers={result.different} />

          {/* TABLE */}
          <h2 style={styles.subtitle}>📋 Comparison Table</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Paper</th>
                <th>Similarity</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {renderRows(result.high, "High", "#22c55e")}
              {renderRows(result.medium, "Medium", "#eab308")}
              {renderRows(result.different, "Low", "#ef4444")}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

function Section({ title, color, papers }) {
  return (
    <div style={{ ...styles.section, borderLeft: `6px solid ${color}` }}>
      <h2 style={{ color }}>{title}</h2>

      <div style={styles.grid}>
        {papers.map((p, i) => (
          <div key={i} style={styles.card}>
            <h4 style={{
    fontSize: "14px",
    fontWeight: "600",
    wordBreak: "break-word",
    overflowWrap: "break-word",
    lineHeight: "1.4",
    color: "#333",
  }}>{p.filename}</h4>
            <p>Match: {p.matchCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function renderRows(list, label, color) {
  return list.map((p, i) => (
    <tr key={i}>
      <td>{p.filename}</td>
      <td>{<p>Match: {p.matchCount}</p>}%</td>
      <td style={{ color, fontWeight: "600" }}>{label}</td>
    </tr>
  ));
}

const styles = {
  page: {
    padding: "30px",
    background: "linear-gradient(135deg, #eef2ff, #e0f7fa)",
    minHeight: "100vh",
  },

  title: {
    textAlign: "center",
  },

  inputBox: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    margin: "20px 0",
  },

  input: {
    padding: "10px",
    width: "400px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },

  button: {
    padding: "10px 20px",
    background: "#6366f1",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },

  section: {
    marginBottom: "30px",
    padding: "20px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    background: "rgba(255,255,255,0.6)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
  },

  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "16px",
    width: "250px",
  },

  subtitle: {
    marginTop: "30px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#fff",
  },
};

export default Comparison;