import { useData } from "../context/DataContext";

function Summary() {
  const { papers } = useData();

  if (!papers || papers.length === 0) {
    return <h2 style={{ padding: "20px" }}>No papers uploaded yet</h2>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📄 Research Summary</h1>

      {papers.map((paper, index) => (
        <div key={index} style={styles.card}>
          <h2 style={styles.filename}>📘 {paper.filename}</h2>

          <h3 style={styles.heading}>🔹 Summary</h3>
          <p style={styles.text}>
            {paper.summary.slice(0, 300)}...
          </p>

          <h3 style={{ ...styles.heading, color: "#6a11cb" }}>
            🔹 Key Insight
          </h3>
          <p style={styles.text}>
            This paper focuses on improving detection accuracy using advanced
            techniques and highlights limitations of traditional approaches.
          </p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    background: "#f4f7ff",
    minHeight: "100vh",
  },

  title: {
    marginBottom: "20px",
    color: "#333",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "15px",
    marginBottom: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    transition: "0.3s",
  },

  filename: {
    color: "#2575fc",
    marginBottom: "10px",
  },

  heading: {
    color: "#ff6b6b",
    marginTop: "10px",
  },

  text: {
    color: "#444",
    lineHeight: "1.6",
  },
};

export default Summary;