import { Routes, Route, useLocation } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import Summary from "./pages/Summary";
import Comparison from "./pages/Comparison";
import Chat from "./pages/Chat";
import Graph from "./pages/Graph";
import Insights from "./pages/Insights";

import Sidebar from "./components/Sidebar";

function App() {
  const location = useLocation();

  // Pages where sidebar should NOT appear
  const hideSidebarRoutes = ["/", "/register"];

  const showSidebar = !hideSidebarRoutes.includes(location.pathname);

  return (
    <div style={{ display: "flex" }}>
      
      {/* Sidebar (only after login pages) */}
      {showSidebar && <Sidebar />}

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;