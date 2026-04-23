import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [papers, setPapers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("papers")) || [];
    setPapers(stored);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📊 Research Dashboard</h1>

      {/* TOP STATS */}
      <div style={styles.statsGrid}>
        <StatCard title="Total Papers" value={papers.length} color="#6366f1" />
        <StatCard title="Highly Related" value="--" color="#22c55e" />
        <StatCard title="Moderate" value="--" color="#eab308" />
        <StatCard title="Different" value="--" color="#ef4444" />
      </div>

      {/* MAIN GRID */}
      <div style={styles.grid}>

        {/* INFO CARD */}
        <div
  style={styles.card}
  onMouseEnter={(e) =>
    (e.currentTarget.style.transform = "scale(1.03)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.transform = "scale(1)")
  }
>
          <h2 style={{ color: "#4f46e5" }}>📌 Project Overview</h2>
          <p>
            This system analyzes research papers using AI to generate summaries,
            compare similarities, detect trends, and answer questions using
            intelligent chat.
          </p>
        </div>

        {/* INSIGHTS PREVIEW */}
        <div
  style={styles.card}
  onMouseEnter={(e) =>
    (e.currentTarget.style.transform = "scale(1.03)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.transform = "scale(1)")
  }
>
          <h2 style={{ color: "#22c55e" }}>🔬 Insights Preview</h2>
          <p>
            Most papers focus on AI-based approaches like Machine Learning and
            Deep Learning. Future scope includes real-time detection systems.
          </p>
        </div>

        {/* QUICK ACTIONS */}
        <div
  style={styles.card}
  onMouseEnter={(e) =>
    (e.currentTarget.style.transform = "scale(1.03)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.transform = "scale(1)")
  }
>
          <h2 style={{ color: "#6366f1" }}>⚡ Quick Actions</h2>

          <button style={styles.button} onClick={() => navigate("/upload")}>
            Upload Papers
          </button>

          <button style={styles.button} onClick={() => navigate("/comparison")}>
            View Comparison
          </button>

          <button style={styles.button} onClick={() => navigate("/chat")}>
            Ask AI
          </button>
        </div>

        {/* PAPER LIST PREVIEW */}
        <div
  style={styles.card}
  onMouseEnter={(e) =>
    (e.currentTarget.style.transform = "scale(1.03)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.transform = "scale(1)")
  }
>
          <h2 style={{ color: "#f59e0b" }}>📄 Uploaded Papers</h2>

          {papers.length === 0 ? (
            <p>No papers uploaded yet</p>
          ) : (
            papers.slice(0, 5).map((p, i) => (
              <div key={i} style={styles.paperItem}>
                {p.name}
              </div>
            ))
          )}
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
    color: "#1e293b",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },

  card: {
    padding: "20px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    transition: "0.3s",
  },

  button: {
    display: "block",
    marginTop: "10px",
    padding: "10px",
    width: "100%",
    borderRadius: "10px",
    border: "none",
    background: "#6366f1",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s",
  },

  paperItem: {
    padding: "8px",
    marginTop: "5px",
    background: "#f1f5ff",
    borderRadius: "8px",
    fontSize: "14px",
  },
};
function StatCard({ title, value, color }) {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        textAlign: "center",
        transition: "0.3s",
      }}
    >
      <h3 style={{ color }}>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}