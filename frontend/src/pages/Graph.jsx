import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  {
    id: "1",
    data: { label: "Paper 1" },
    position: { x: 100, y: 100 },
  },
  {
    id: "2",
    data: { label: "Paper 2" },
    position: { x: 300, y: 200 },
  },
  {
    id: "3",
    data: { label: "Paper 3" },
    position: { x: 500, y: 100 },
  },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", label: "Agreement" },
  { id: "e2-3", source: "2", target: "3", label: "Contradiction" },
];

function Graph() {
  return (
    <div style={{ height: "90vh", background: "#f5f7fa" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        onNodeClick={(e, node) => alert(node.data.label)}
      />
    </div>
  );
}

export default Graph;