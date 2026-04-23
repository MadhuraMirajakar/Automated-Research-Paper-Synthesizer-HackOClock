import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>📚 PaperAI</h2>

      {menu.map((item, i) => (
        <Link
          key={i}
          to={item.path}
          style={{
            ...styles.link,
            background:
              location.pathname === item.path
                ? "rgba(255,255,255,0.2)"
                : "transparent",
          }}
        >
          <span style={styles.icon}>{item.icon}</span>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

const menu = [
  { name: "Dashboard", path: "/dashboard", icon: "🏠" },
  { name: "Upload", path: "/upload", icon: "📤" },
  { name: "Summary", path: "/summary", icon: "📝" },
  { name: "Comparison", path: "/comparison", icon: "📊" },
  { name: "Chat AI", path: "/chat", icon: "💬" },
  { name: "Graph", path: "/graph", icon: "🔗" },
  { name: "Insights", path: "/insights", icon: "📈" },
];

const styles = {
  sidebar: {
    width: "240px",
    height: "100vh",
    padding: "20px",
    background: "linear-gradient(180deg, #6a11cb, #2575fc)",
    color: "#fff",
    boxShadow: "4px 0 20px rgba(0,0,0,0.1)",
  },

  logo: {
    marginBottom: "30px",
    fontWeight: "bold",
  },

  link: {
    display: "flex",
    alignItems: "center",
    padding: "12px",
    borderRadius: "10px",
    textDecoration: "none",
    color: "#fff",
    marginBottom: "10px",
    transition: "0.3s",
  },

  icon: {
    marginRight: "10px",
  },
};

export default Sidebar;