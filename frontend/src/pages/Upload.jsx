import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

function Upload() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setPapers } = useData();

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      alert("Please select files");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      setLoading(true);

      const response = await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.error) {
        alert(data.error);
        setLoading(false);
        return;
      }

      setPapers(data.papers);
      setLoading(false);
      navigate("/summary");

    } catch (error) {
      console.error(error);
      alert("Upload failed");
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        
        <h2 style={styles.title}>📤 Upload Research Papers</h2>

        <input
          type="file"
          multiple
          onChange={handleFileChange}
          style={styles.input}
        />

        <button onClick={handleUpload} style={styles.button}>
          {loading ? "Uploading..." : "Upload & Analyze"}
        </button>

        {/* File Preview Boxes */}
        <div style={styles.fileList}>
          {files.map((file, index) => (
            <div key={index} style={styles.fileCard}>
              📄 {file.name}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

const styles = {
  /* 🌈 Full Page Background */
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #eef2ff, #e0f7fa)",
  },

  /* 📦 Main Upload Card */
  card: {
    background: "#ffffff",
  padding: "50px",
  borderRadius: "20px",

  /* 🔥 SIZE FIX */
  width: "60%",
  maxWidth: "800px",
  minWidth: "400px",

  textAlign: "center",
  boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
  transition: "0.3s",
  },

  title: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "600",
    color: "#4c1d95",
  },

  input: {
    marginBottom: "15px",
  },

  /* 🚀 Button */
  button: {
    padding: "10px 20px",
    background: "linear-gradient(135deg, #7c3aed, #6366f1)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s",
  },

  /* 📂 File List */
  fileList: {
  marginTop: "25px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "100%",
},

  /* 📄 File Card */
  fileCard: {
  background: "#f5f3ff",
  padding: "12px 15px",
  borderRadius: "12px",
  textAlign: "left",
  fontSize: "14px",
  transition: "0.3s",
  cursor: "pointer",

  width: "100%",
  wordBreak: "break-word",
},
};

export default Upload;