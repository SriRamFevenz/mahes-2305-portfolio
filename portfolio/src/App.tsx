export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        color: "white",
        padding: "50px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#00ff88", fontSize: "60px" }}>
        MAXTRON AI
      </h1>

      <p style={{ fontSize: "22px", maxWidth: "700px", lineHeight: "1.8" }}>
        Hi, I'm Mahes — a Computer Science and Cyber Security student
        passionate about bug bounty, AI systems, and full stack development.
      </p>

      <h2 style={{ marginTop: "40px" }}>Skills</h2>

      <ul style={{ lineHeight: "2", fontSize: "18px" }}>
        <li>React.js</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Cyber Security</li>
        <li>Bug Bounty</li>
      </ul>

      <h2 style={{ marginTop: "40px" }}>Projects</h2>

      <div
        style={{
          backgroundColor: "#111",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "20px",
        }}
      >
        <h3>MAXTRON AI</h3>

        <p>
          AI-powered platform focused on automation, deployment,
          and intelligent systems.
        </p>
      </div>
    </div>
  );
}