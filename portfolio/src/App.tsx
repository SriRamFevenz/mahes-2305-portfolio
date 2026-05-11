export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "white",
      fontFamily: "Arial",
      padding: "40px"
    }}>
      
      <h1 style={{
        fontSize: "60px",
        color: "#00ff88"
      }}>
        MAXTRON AI
      </h1>

      <p style={{
        fontSize: "22px",
        maxWidth: "700px",
        lineHeight: "1.7"
      }}>
        Hi, I'm Mahes — a Computer Science and Cyber Security student
        passionate about bug bounty, AI systems, and full stack development.
      </p>

      <div style={{
        marginTop: "40px"
      }}>
        <h2>Skills</h2>

        <ul style={{
          lineHeight: "2",
          fontSize: "18px"
        }}>
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Cyber Security</li>
          <li>Bug Bounty</li>
        </ul>
      </div>

      <div style={{
        marginTop: "40px"
      }}>
        <h2>Projects</h2>

        <div style={{
          background: "#111",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "20px"
        }}>
          <h3>MAXTRON AI</h3>

          <p>
            AI-powered platform focused on automation,
            deployment, and intelligent systems.
          </p>
        </div>
      </div>
    </div>
  )
}